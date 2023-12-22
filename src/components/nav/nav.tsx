import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav className="w-full fixed h-20 bg-primary px-8">
      <div className="h-full flex items-center justify-between">
        <Logo />
        <Link href={"https://cyobot.myshopify.com/"}>
          <Button variant={"positive"}>Shop</Button>
        </Link>
      </div>
    </nav>
  );
};
