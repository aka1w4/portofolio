import { projects } from "../data/projects";

export default function Projects() {

  return (
    <section className="flex flex-col gap-8 p-8 text-ox-fg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-sm text-ox-muted">
          Some of my personal projects and experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-4 rounded-md border border-ox-elevated p-5"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-ox-blue">
                {project.title}
              </h2>

              <p className="text-sm text-ox-muted leading-7">
                {project.description}
              </p>
            </div>

            <div className="mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ox-green hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
