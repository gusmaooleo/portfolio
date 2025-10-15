import {
  Dribbble,
  Github,
  Gitlab,
  Instagram,
  Linkedin,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function IDEBoxFooter() {
  return (
    <div className="flex flex-row w-full border-t border-teal-900 font-mono font-semibold text-amber-100 text-sm items-center justify-between">
      <div className="flex flex-row h-full">
        <div className="border-r border-teal-900 px-3 py-1 hover:bg-black/15 duration-100 ease-in cursor-pointer">
          <Link href={"https://github.com/gusmaooleo"}>
            <Github />
          </Link>
        </div>
        <div className="border-r border-teal-900 px-3 py-1 hover:bg-black/15 duration-100 ease-in cursor-pointer">
          <Link href={"https://www.linkedin.com/in/gusmaooleo/"}>
            <Linkedin />
          </Link>
        </div>
        <div className="border-r border-teal-900 px-3 py-1 hover:bg-black/15 duration-100 ease-in cursor-pointer">
          <Link href={"https://www.instagram.com/gusmaooleo/"}>
            <Instagram />
          </Link>
        </div>
        <div className="border-r border-teal-900 px-3 py-1 hover:bg-black/15 duration-100 ease-in cursor-pointer">
          <Link href={"https://gitlab.com/gusmaooleo"}>
            <Gitlab />
          </Link>
        </div>
        <div className="border-r border-teal-900 px-3 py-1 hover:bg-black/15 duration-100 ease-in cursor-pointer">
          <Dribbble />
        </div>
      </div>
      <div className="border-l border-teal-900 h-full px-3 items-center cursor-pointer hover:bg-black/15 duration-100 ease-in">
        <Link className="flex flex-row gap-4 h-full items-center" href={""}>
          <p>Give me a star on Github</p>
          <Star size={20} />
        </Link>
      </div>
    </div>
  );
}
