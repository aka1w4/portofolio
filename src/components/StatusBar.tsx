import { FaFolder, FaHtml5 } from "react-icons/fa";
import { DiVim } from "react-icons/di";
import { CiViewTimeline } from "react-icons/ci";
import { FaCodeFork } from "react-icons/fa6";

type StatusbarProps = {
  activeFile: string;
};

export default function StatusBar({ activeFile }: StatusbarProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 pb-2">

          <div className="border border-ox-bg bg-ox-surface flex rounded-md items-center gap-2 font-semibold overflow-hidden">
            <div className="bg-ox-blue h-full py-1 px-2 flex items-center">
              <DiVim color="0D0D0D" />
            </div>
            <span className="px-2 text-ox-blue">NORMAL</span>
          </div>

          <div className="border border-ox-bg bg-ox-surface flex rounded-md items-center gap-2 font-semibold overflow-hidden">
            <div className="bg-ox-pink h-full py-1 px-2 flex items-center">
              <FaHtml5 color="0D0D0D" />
            </div>
            <span className="px-3 text-ox-pink">{activeFile}</span>
          </div>

          <div className="flex items-center gap-2 text-ox-elevated">
            <FaCodeFork />
            <span>main</span>
          </div>

        </div>

        <div className="flex items-center gap-2 pb-2">
          <span className="text-ox-green">html</span>
          <div className="border border-ox-bg bg-ox-surface flex rounded-md items-center gap-1 font-semibold overflow-hidden">
            <div className="bg-ox-sand h-full py-1 px-2 flex items-center">
              <FaFolder color="0D0D0D" />
            </div>
            <span className="px-2 text-ox-sand">portofolio</span>
          </div>

          <div className="border border-ox-bg bg-ox-surface flex rounded-md items-center gap-1 font-semibold overflow-hidden">
            <div className="bg-ox-light-sandy h-full py-1 px-2 flex items-center">
              <CiViewTimeline color="0D0D0D" />
            </div>
            <span className="px-2 text-ox-light-sandy">Ln 1, Col 1</span>
          </div>
        </div>

      </div>
      <span>Welcome to my portfolio</span>
    </div>
  )
}
