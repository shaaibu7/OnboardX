import { useCallback } from "react";
import { toast } from "react-toastify";
import useContract from "./useContract";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKitNetwork } from "@reown/appkit/react";
import { liskSepoliaNetwork } from "../connection";
import { parseEther } from "ethers";

const useCreateCompany = () => {
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
