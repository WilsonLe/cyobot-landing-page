"use client";

import { Logo } from "@/components/logo";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav className="w-full fixed h-20 bg-primary px-8">
      <div className="h-full flex items-center justify-between">
        <Logo />
      </div>
    </nav>
  );
};
