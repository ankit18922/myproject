export default function Template2({ formdata }) {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = [],
    activities = [],
  } = formdata || {};

  return (
    <div className="max-w-[900px] mx-auto bg-white p-10 text-gray-900 font-sans">

      {/* Header */}
      <div className="flex justify-between border-b-2 border-black pb-4">
        <div>
          <h1 className="text-3xl font-bold">
            {personal.fullName || "Your Name"}
          </h1>

          {personal.title?.trim() && (
            <p className="text-sm mt-1">{personal.title}</p>
          )}
        </div>

        <div className="text-sm text-right space-y-1">
          {personal.portfolio && <p>Portfolio: {personal.portfolio}</p>}
          {personal.github && <p>{personal.github}</p>}
          {personal.linkedin && <p>{personal.linkedin}</p>}
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
        </div>
      </div>

      {/* Summary */}
      {personal.summary?.trim() && (
        <div className="mt-6 text-sm leading-relaxed">
          {personal.summary}
        </div>
      )}

      {/* Skills */}
      {Array.isArray(skills) && skills.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1">
            Skills
          </h2>

          <div className="grid grid-cols-[200px_1fr] gap-y-3 mt-4 text-sm">
            {skills.map((skill, i) => {
              if (!skill?.title) return null;

              return (
                <div key={i} className="contents">
                  <p className="font-semibold">{skill.title}</p>

                  <p>
                    {Array.isArray(skill.items)
                      ? skill.items.join(", ")
                      : skill.items || ""}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Technical Experience */}
      {Array.isArray(experience) && experience.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1">
            Technical Experience
          </h2>

          {experience.map((exp) => (
            <div key={exp.id} className="flex justify-between mt-6">
              <div>
                <h3 className="font-semibold text-sm">
                  {exp.title}
                </h3>
                <p className="text-sm">{exp.company}</p>

                {/* DESCRIPTION */}
                {exp.description?.trim() && (
                  <p className="text-sm mt-1">
                    {exp.description}
                  </p>
                )}

                {/* BULLET POINTS */}
                {Array.isArray(exp.points) && exp.points.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                    {exp.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>

              <span className="text-sm whitespace-nowrap">
                {exp.startDate} – {exp.current ? "Present" : exp.endDate}
              </span>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1">
            Education
          </h2>

          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between text-sm mt-4">
              <p className="font-semibold">{edu.degree}</p>
              <span>
                {edu.startDate} – {edu.endDate}
              </span>
            </div>
          ))}
        </section>
      )}

      {/* Activities */}
      {activities.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1">
            Activities
          </h2>

          <ul className="list-disc list-inside text-sm mt-4 space-y-1">
            {activities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      )}

    </div>
  );
}
