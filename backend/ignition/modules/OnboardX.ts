import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x9de32bcaA113C1CEF7DC6cCCA438F25A3Ca7bAcD";

const OnboardXModule = buildModule("OnboardXModule", (m) => {

    const OnboardXStake = m.contract("OnboardX", [tokenAddress]);

    return { OnboardXStake };
});

export default OnboardXModule;