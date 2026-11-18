import { FaHtml5 } from "react-icons/fa";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contacts from "../pages/Contacts";
import type { FileName } from "../data/typefile";

type ExplorerProps = {
  activeFile: FileName;
  setActiveFile: (filename: FileName) => void;
};

export default function Explorer({ activeFile, setActiveFile }: ExplorerProps) {
  const files = {
    "about.html": <About />,
    "experince.html": <Experience />,
    "projects.html": <Projects />,
    "skills.html": <Skills />,
    "contacts.html": <Contacts />,
  };

  return (
    <div className="overflow-x-auto p-4 text-xs leading-6">
      <div className="grid grid-cols-[220px_1fr] h_screen">
        <div className="text-ox-blue flex flex-col overflow-y-auto">
          {(Object.keys(files) as FileName[]).map((filename) => (
            <button className="flex items-center gap-2 text-left p-px cursor-pointer" key={filename} onClick={() => setActiveFile(filename)}>
              <FaHtml5 size={14} color="#E34F26" /> {filename}
            </button>
          ))}
        </div>
        <div>
          <div className="min-h-0 overflow-y-auto">
            {files[activeFile]}
          </div>
        </div>
      </div>
    </div>
  );
}

