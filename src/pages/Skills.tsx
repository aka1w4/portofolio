export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Go", "TypeScript"],
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    },
    {
      title: "Development Tools",
      skills: ["Git", "Neovim", "NvChad", "GCC", "Clang", "CMake", "Vite"],
    },
    {
      title: "Linux & System Environment",
      skills: ["Linux", "Arch Linux", "EndeavourOS", "Niri"],
    },
    {
      title: "Graphics & Game Development",
      skills: ["raylib"],
    },
  ];

  return (
    <section className="flex flex-col gap-8 p-8 text-ox-fg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Skills</h1>
        <p className="text-sm text-ox-muted">
          Technologies and tools I have learned and explored.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="flex flex-col gap-4 rounded-md border border-ox-elevated p-5"
          >
            <h2 className="text-base font-semibold text-ox-blue">
              {group.title}
            </h2>

            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-ox-surface px-3 py-1.5 text-xs text-ox-fg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
