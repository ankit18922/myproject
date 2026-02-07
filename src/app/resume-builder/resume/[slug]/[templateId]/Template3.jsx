import { Mail, Phone, MapPin } from "lucide-react";

export default function Template3({ formdata }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden font-sans">

      {/* Header */}
      <div className="p-10">
        <h1 className="text-5xl font-bold text-green-900 tracking-wide">
          {formdata.personal.fullName || "JOHN DOE"}
        </h1>

        {formdata.personal.title && (
          <p className="text-xl text-green-700 mt-2 font-medium">
            {formdata.personal.title}
          </p>
        )}

        {/* Contact */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
          {formdata.personal.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-green-700" />
              {formdata.personal.email}
            </span>
          )}
          {formdata.personal.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-green-700" />
              {formdata.personal.phone}
            </span>
          )}
          {formdata.personal.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-green-700" />
              {formdata.personal.location}
            </span>
          )}
        </div>
      </div>

      {/* SUMMARY */}
      {formdata.personal.summary && (
        <section className="bg-green-100/60 px-10 py-6 border-y border-green-200">
          <h2 className="text-green-800 font-semibold tracking-wide text-lg mb-3">
            SUMMARY
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm">
            {formdata.personal.summary}
          </p>
        </section>
      )}

      {/* EXPERIENCE */}
      {formdata.experience.some(exp => exp.title || exp.company) && (
        <section className="px-10 py-8">
          <h2 className="text-green-800 font-semibold tracking-wide text-lg mb-6 border-b border-green-200 pb-2">
            EXPERIENCE
          </h2>

          <div className="space-y-6">
            {formdata.experience
              .filter(exp => exp.title || exp.company)
              .map(exp => (
                <div key={exp.id}>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {exp.company}
                    <span className="text-sm text-gray-500 font-normal ml-2">
                      | {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                    </span>
                  </h3>

                  {exp.description && (
                    <p className="text-sm text-gray-700 mt-2">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {formdata.skills.some(skill => skill) && (
        <section className="bg-green-100/60 px-10 py-6 border-y border-green-200">
          <h2 className="text-green-800 font-semibold tracking-wide text-lg mb-3">
            SKILLS
          </h2>

          <div className="flex flex-wrap gap-2">
            {formdata.skills
              .filter(skill => skill)
              .map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {formdata.education.some(edu => edu.degree || edu.school) && (
        <section className="px-10 py-8">
          <h2 className="text-green-800 font-semibold tracking-wide text-lg mb-4 border-b border-green-200 pb-2">
            EDUCATION
          </h2>

          <div className="space-y-3">
            {formdata.education
              .filter(edu => edu.degree || edu.school)
              .map(edu => (
                <div key={edu.id}>
                  <p className="text-gray-800 font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-600">
                    {edu.school}
                  </p>
                  <p className="text-xs text-gray-500">
                    {edu.startDate} – {edu.endDate}
                  </p>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
