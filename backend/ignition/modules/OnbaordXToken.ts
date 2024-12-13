import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const OnboardXTokenModule = buildModule("OnboardXTokenModule", (m) => {

    const OnboardXTokenStake = m.contract("OnboardXToken");

    return { OnboardXTokenStake };
});

export default OnboardXTokenModule;