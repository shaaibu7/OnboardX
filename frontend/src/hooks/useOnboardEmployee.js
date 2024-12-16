import { useCallback } from "react";
import { toast } from "react-toastify";
import useContract from "./useContract";
import useTokenContract from "./useTokenContract";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKitNetwork } from "@reown/appkit/react";
import { liskSepoliaNetwork } from "../connection";
import { parseEther, parseUnits } from "ethers";

const useOnboardEmployee = () => {
    const contract = useContract(true);
    const tokenContract = useTokenContract(true);
    const { address } = useAppKitAccount();
    const { chainId } = useAppKitNetwork();
    return useCallback(
        async (name, role, payment, employeeAddress, status) => {
            if (
                !name ||
                !role ||
                !payment ||
                !employeeAddress ||
                !status 
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

                const parsedPayment = parseUnits(payment.toString(), 18);
                const parsedStatus = BigInt(status);

                const approveToken = await tokenContract.approve("0x6c3EbC52270324a16689976456e5Be992e9D54F2", parsedPayment);

                const tokenReciept = await approveToken.wait();

                const estimatedGas = await contract.onboardEmployee.estimateGas(
                    name,
                    role,
                    parsedPayment,
                    employeeAddress,
                    parsedStatus
                );
                const tx = await contract.onboardEmployee(
                    name,
                    role,
                    parsedPayment,
                    employeeAddress,
                    parsedStatus,
                    {
                        gasLimit: (estimatedGas * BigInt(120)) / BigInt(100),
                    }
                );
                const reciept = await tx.wait();


                if (reciept.status === 1) {
                    toast.success("Employee Onboarding successful");
                    return;
                }
                toast.error("Employee Onboarding failed");
                return;
            } catch (error) {
                console.trace(error)
                console.error("error while onboarding employee: ", error);
                toast.error("Onboarding employee errored");
            }
        },
        [address, chainId, contract]
    );
};

export default useOnboardEmployee;
