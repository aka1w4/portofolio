import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";
import type { ThemeRegistration } from "shiki";
import { About } from "./data/about.ts";
import { Experience } from "./data/experience.ts";
import { Projects } from "./data/projects.ts";
import { Skills } from "./data/skills.ts";
import { Contacts } from "./data/contacts.ts";

const oxocarbon: ThemeRegistration = {
  name: "oxocarbon",
  type: "dark",
  colors: {
    "editor.background": "#161616",
    "editor.foreground": "#F2F4F8",
    "editorLineNumber.foreground": "#525252",
    "editorLineNumber.activeForeground": "#F2F4F8",
  },
  tokenColors: [
    {
      scope: ["keyword", "storage.type"],
      settings: { foreground: "#BE95FF" },
    },
    {
      scope: ["entity.name.function", "support.function"],
      settings: { foreground: "#78A9FF" },
    },
    {
      scope: ["string"],
      settings: { foreground: "#42BE65" },
    },
    {
      scope: ["constant.numeric"],
      settings: { foreground: "#DDBB55" },
    },
    {
      scope: ["comment"],
      settings: { foreground: "#525252", fontStyle: "italic" },
    },
  ],
};

export default function CodePreview() {
  const files = {
    "about.c": About,
    "experince.c": Experience,
    "projects.cpp": Projects,
    "skills.h": Skills,
    "contacts.cpp": Contacts,
  };

  const [html, setHtml] = useState("");
  const [activeFile, setActiveFile] = useState("about.c");

  useEffect(() => {
    let cancelled = false;

    async function highlight() {
      const highlighter = await createHighlighter({
        themes: [oxocarbon],
        langs: ["c", "cpp"],
      });

      const code = files[activeFile];
      const language = activeFile.endsWith(".cpp") ||
        activeFile.endsWith(".h")
        ? "cpp"
        : "c";

      const result = highlighter.codeToHtml(code, {
        lang: language,
        theme: "oxocarbon",
        transformers: [
          {
            line(node, line) {
              node.properties["data-line"] = line;
            },
          },
        ],
      });

      if (!cancelled) {
        setHtml(result);
      }

      highlighter.dispose();
    }

    highlight();

    return () => {
      cancelled = true;
    };
  }, [activeFile]);

  return (
    <div className="overflow-hidden rounded-xl bg-ox-bg">
      <div className="overflow-x-auto p-4 text-xs leading-6">
        <div className="grid grid-cols-[10%_90%] h_screen">
          <div className="bg-ox-bg text-ox-blue flex flex-col overflow-y-auto">
            {Object.keys(files).map((filename) => (
              <button className="text-left p-px cursor-pointer" key={filename} onClick={() => setActiveFile(filename)}>{filename}</button>
            ))}
          </div>
          {html ? (
            <div
              className="[&>pre]:bg-transparent! [&>pre]:p-0! overflow-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
