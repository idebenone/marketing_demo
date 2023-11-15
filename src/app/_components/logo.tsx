"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src="/logo_light.png"
        height="140"
        width="140"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo_dark.png"
        height="140"
        width="140"
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};
