import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <nav className="w-full fixed h-20 bg-ghost px-8 bottom-0">
      <div className="h-full flex items-center justify-end">
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between items-center">
            <Link href={"https://www.instagram.com/cyo.bot/"}>
              <InstagramIcon className="w-9 h-9" />
            </Link>
            <Link href={"https://www.reddit.com/user/CYOBot_2023/"}>
              <Image
                src={"reddit.svg"}
                width={33}
                height={33}
                alt={"Reddit icon"}
              />
            </Link>
            <Link
              href={
                "https://hackaday.io/project/193061-cyocrawler-open-source-quadrupedal-robot?fbclid=IwAR3WInWBFuG_8fJqJi1njoPip_QejTprYBy-vue_A8Qz2ZY4VP57dvKltYk"
              }
            >
              <Image
                src="hackaday.svg"
                width={33}
                height={33}
                alt="Hackaday icon"
              />
            </Link>
          </div>
          <span className="text-xs">Copyright © 2023 | CYOBot LLC.</span>
        </div>
      </div>
    </nav>
  );
};
