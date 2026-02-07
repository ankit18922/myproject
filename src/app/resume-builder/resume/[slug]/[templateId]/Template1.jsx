import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Template1({ formdata }) {
  const {
    personal = {},
    summary = "",
    experience = [],
    projects = [],
    education = [],
    publications = [],
    skills = [],
  } = formdata || {};

  return (
    <div className="max-w-[900px] mx-auto bg-white p-10 text-gray-800 font-serif">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold">
          {personal.fullName || "Your Name"}
        </h1>

        <div className="flex justify-center gap-4 text-sm mt-2 flex-wrap">
          {personal.github && (
            <span className="flex items-center gap-1">
              <FaGithub /> {personal.github}
            </span>
          )}
          {personal.linkedin && (
            <span className="flex items-center gap-1">
              <FaLinkedin /> {personal.linkedin}
            </span>
          )}
          {personal.website && (
            <span className="flex items-center gap-1">
              <FaGlobe /> {personal.website}
            </span>
          )}
          {personal.email && (
            <span className="flex items-center gap-1">
              <FaEnvelope /> {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1">
              <FaPhone /> {personal.phone}
            </span>
          )}
        </div>
      </div>

      <hr className="my-6 border-gray-400" />

      {/* Summary */}
      {summary?.trim() && (
        <section>
          <h2 className="text-lg font-semibold border-b border-gray-400 mb-2">
            SUMMARY
          </h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Work Experience */}
      {experience.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold border-b border-gray-400 mb-3">
            WORK EXPERIENCE
          </h2>

          {experience.map((job, i) => (
            <div key={i} className="mb-4">
              <div className="grid grid-cols-[1fr_auto] gap-4">
                <p className="font-semibold">{job.title}</p>
                <p className="text-sm">
                  {job.startDate} – {job.current ? "Present" : job.endDate}
                </p>
              </div>

              {job.description && (
                <p className="text-sm mt-1">{job.description}</p>
              )}

              {Array.isArray(job.points) && job.points.length > 0 && (
                <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                  {job.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold border-b border-gray-400 mb-3">
            PROJECTS
          </h2>

          {projects.map((p, i) => (
            <div key={i} className="mb-3">
              <div className="grid grid-cols-[1fr_auto] gap-4">
                <p className="font-semibold">{p.name}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-sm underline"
                  >
                    Link to Demo
                  </a>
                )}
              </div>
              {p.description && (
                <p className="text-sm mt-1">{p.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold border-b border-gray-400 mb-3">
            EDUCATION
          </h2>

          {education.map((edu, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto] text-sm mt-1">
              <p>
                {edu.duration} &nbsp;
                {edu.degree}<strong>{edu.institute}</strong>
              </p>
              {edu.gpa && <p>(GPA: {edu.gpa})</p>}
            </div>
          ))}
        </section>
      )}

      {/* Publications */}
      {publications.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold border-b border-gray-400 mb-3">
            PUBLICATIONS
          </h2>

          {publications.map((pub, i) => (
            <p key={i} className="text-sm mb-2">
              {pub.authors} ({pub.year}). <i>{pub.title}</i>. <br />
              In: {pub.journal}. URL: {pub.link}
            </p>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold border-b border-gray-400 mb-3">
            SKILLS
          </h2>

          {skills.map((skill, i) => (
            <p key={i} className="text-sm mt-1">
              <strong>{skill.title}</strong> &nbsp;&nbsp;
              {Array.isArray(skill.items)
                ? skill.items.join(", ")
                : skill.items}
            </p>
          ))}
        </section>
      )}
    </div>
  );
}
