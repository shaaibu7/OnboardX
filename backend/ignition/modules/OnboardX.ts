import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xd0c0E152Ca4d821b37Cbf481f881422cD95D0647";

const OnboardXModule = buildModule("OnboardXModule", (m) => {

    const OnboardXStake = m.contract("OnboardX", [tokenAddress]);

    return { OnboardXStake };
});

export default OnboardXModule;