import { useCallback } from "react";
import { toast } from "react-toastify";
import useContract from "./useContract";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKitNetwork } from "@reown/appkit/react";
import { liskSepoliaNetwork } from "../connection";
import { parseEther } from "ethers";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ContextApi from "../context/ContextApi";

const useCreateCompany = () => {
    const {setRegisterLoader}=useContext(ContextApi);

    const navigate=useNavigate()
    const contract = useContract(true);
    const { address } = useAppKitAccount();
    const { chainId } = useAppKitNetwork();
    return useCallback(
        async (name, reg_no) => {
            if (
                !name ||
                !reg_no
            ) {
                toast.error("Missing field(s)");
                return;
            }
            if (!address) {
                toast.error("Connect your wallet!");
                return;
            }
            if (Number(chainId) !== liskSepoliaNetwork.chainId) {
                toast.error("You are not connected to the right network");
                return;
            }

            if (!contract) {
                toast.error("Cannot get contract!");
                return;
            }

            try {
                setRegisterLoader(true)
                const estimatedGas = await contract.registerCompany.estimateGas(
                    name,
                    reg_no
                );
                const tx = await contract.registerCompany(
                    name,
                    reg_no,
                    {
                        gasLimit: (estimatedGas * BigInt(120)) / BigInt(100),
                    }
                );
                const reciept = await tx.wait();

                if (reciept.status === 1) {
                    toast.success("Company Creation successful");
                    setRegisterLoader(false)
                    navigate("/onboard")
                    return;
                }
                toast.error("Company Creation failed");
                return;

            } catch (error) {
                console.error("error while creating company: ", error);
                toast.error("Company Creation errored");
            }
        },
        [address, chainId, contract]
    );
};

export default useCreateCompany;
