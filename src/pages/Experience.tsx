import { experiences } from "../data/experience";

export default function Experience() {

  return (
    <section className="flex flex-col gap-8 p-8 text-ox-fg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="text-sm text-ox-muted">
          My learning journey and technical exploration.
        </p>
      </div>

      <div className="flex flex-col gap-8 border-l border-ox-elevated ml-2 pl-6">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="relative flex flex-col gap-2"
          >
            <span className="absolute left-7.75 top-1.5 size-2.5 rounded-full bg-ox-blue ring-4 ring-ox-bg" />

            <span className="text-xs text-ox-green">
              {experience.period}
            </span>

            <h2 className="text-lg font-semibold">
              {experience.title}
            </h2>

            <p className="max-w-2xl text-sm text-ox-muted leading-7">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
