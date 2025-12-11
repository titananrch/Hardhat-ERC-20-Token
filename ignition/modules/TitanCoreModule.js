import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TitanCoreModule = buildModule("TitanCoreModule", (m) => {
  const titanCore = m.contract("TitanCore"); // no constructor args

  return { titanCore };
});

export default TitanCoreModule;
