import CodeBox from "@/components/hello.md/CodeBox";
import IDESidebar from "@/components/IDEBox/Sidebar/Sidebar";
import { TypingText } from "@/components/ui/typing-text";

export default function Hello() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full font-mono p-6">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex flex-col gap-15">
          <div className="text-left text-amber-100">
            <p>Hi, i'am</p>
            <TypingText
              text="Leonardo"
              className="text-6xl font-semibold"
              speed={80}
              showCursor={true}
              cursorClassName="text-amber-100"
            />
            <h1 className="text-orange-500 font-semibold">{ ">" } Software Engineer</h1>
          </div>
          <CodeBox />
        </div>
      </div>
      <div className="flex w-full h-full"></div>
    </div>
  );
}
