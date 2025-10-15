import Link from "next/link";

export default function CodeBox() {
  return (
    <div className="shadow hidden md:flex flex-col w-[500px] bg-cyan-950 rounded-lg p-3 pb-5 gap-3">
      <div className="flex flex-row gap-3 w-full">
        <div className="w-[12px] h-[12px] rounded-full bg-red-400"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-yellow-400"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-green-400"></div>
      </div>
      <div className="flex flex-col pl-2 text-sm font-medium text-[#586E75]">
        <p>
          <span className="pr-1">1</span>{" "}
          <span className="italic">// try to win the snakegame</span>
        </p>
        <br />
        <p>
          <span className="pr-1">2</span>{" "}
          <span className="italic">
            // you can also see it on my Github page
          </span>
        </p>
        <br />
        <p>
          <span className="pr-1">3</span>{" "}
          <span className="text-orange-600">const</span>{" "}
          <span className="text-teal-600">githubLink</span> ={" "}
          <Link href="https://github.com/gusmaooleo">
            "https://github.com/gusmaooleo"
          </Link>
        </p>
        <br />
      </div>
    </div>
  );
}
