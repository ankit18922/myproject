// app/components/ResumeTemplate.jsx
export default function PlaneTemplate({ formdata }) {
  return (
    <div>
      {/* Header */}
      <div className="text-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">
          {formdata.personal.fullName || "Your Name"}
        </h1>

        <div className="mt-2 text-sm text-gray-600 flex justify-center gap-4 flex-wrap">
          {formdata.personal.phone && <span>📞 {formdata.personal.phone}</span>}
          {formdata.personal.email && <span>✉️ {formdata.personal.email}</span>}
          {formdata.personal.linkedin && <span>💼 {formdata.personal.linkedin}</span>}
          {formdata.personal.location && <span>📍 {formdata.personal.location}</span>}
        </div>
      </div>

      {/* Experience */}
      {formdata.experience.some(exp => exp.company || exp.title) && (
        <Section title="Experience">
          {formdata.experience
            .filter(exp => exp.company || exp.title)
            .map(exp => (
              <Experience
                key={exp.id}
                company={exp.company}
                role={exp.title}
                date={`${exp.startDate} – ${exp.current ? "Present" : exp.endDate}`}
                location={exp.location}
                points={exp.description ? exp.description.split("\n") : []}
              />
            ))}
        </Section>
      )}

      {/* Projects */}
      {formdata.projects?.some(p => p.title) && (
        <Section title="Projects">
          {formdata.projects
            .filter(p => p.title)
            .map(p => (
              <Project
                key={p.id}
                title={p.title}
                points={p.description ? p.description.split("\n") : []}
              />
            ))}
        </Section>
      )}

      {/* Education */}
      {formdata.education.some(edu => edu.school || edu.degree) && (
        <Section title="Education">
          {formdata.education
            .filter(edu => edu.school || edu.degree)
            .map(edu => (
              <div key={edu.id} className="flex justify-between text-sm mb-3">
                <div>
                  <p className="font-semibold">{edu.school}</p>
                  <p>{edu.degree}</p>
                </div>
                <span className="text-gray-600">
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
            ))}
        </Section>
      )}

      {/* Skills */}
      {formdata.skills.some(skill => skill) && (
        <Section title="Skills">
          <p className="text-sm">
            {formdata.skills.filter(skill => skill).join(", ")}
          </p>
        </Section>
      )}
    </div>
  );
}

/* ---------------- Sub Components (UNCHANGED UI) ---------------- */

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="uppercase text-sm font-bold tracking-widest border-b pb-1 mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Experience({ company, role, date, location, points }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm">
        <div>
          <p className="font-semibold">{company}</p>
          <p className="italic">{role}</p>
        </div>
        <div className="text-right text-gray-600">
          <p>{date}</p>
          {location && <p>{location}</p>}
        </div>
      </div>

      {points.length > 0 && (
        <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Project({ title, points }) {
  return (
    <div className="mb-3">
      <p className="font-semibold text-sm">{title}</p>

      {points.length > 0 && (
        <ul className="list-disc list-inside text-sm text-gray-700">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
