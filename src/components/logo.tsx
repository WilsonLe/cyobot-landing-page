import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
  return <Image alt="logo" src={"/logo.svg"} width={268} height={48} />;
};
