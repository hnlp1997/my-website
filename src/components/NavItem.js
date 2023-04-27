import Link from "next/link";
import { ReactNode } from "react";
import Tooltip from "./sections/tooltips";

export default function NavItem({ href, title, icon }) {
  return (
    <Tooltip title={title}>
    <div>
      <Link
        href={href}
        prefetch
        scroll={true}
        className={
          "flex h-12 w-12 shrink-0 transform-none cursor-pointer items-center justify-center rounded-[23%] bg-primary-300 text-center text-black shadow-lg outline-none focus:outline-none dark:bg-primary-500 dark:bg-opacity-50 dark:text-primary-275"
        }
      >
        {icon}
      </Link>
    </div>
    </Tooltip>
  );
}
