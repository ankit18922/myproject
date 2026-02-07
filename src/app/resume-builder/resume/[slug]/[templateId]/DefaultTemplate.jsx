import { Mail, MapPin, Phone } from "lucide-react";

// app/components/ResumeTemplate.jsx
export default function DefaultTemplate({formdata}) {
  return (
    <div>
                    {/* Resume Preview */}
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="text-center border-b-2 border-primary/20 pb-4">
                        <h2 className="text-2xl font-bold text-foreground">
                          {formdata.personal.fullName || "Your Name"}
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-sm text-muted-foreground">
                          {formdata.personal.email && (
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {formdata.personal.email}
                            </span>
                          )}
                          {formdata.personal.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {formdata.personal.phone}
                            </span>
                          )}
                          {formdata.personal.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {formdata.personal.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Summary */}
                      {formdata.personal.summary && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                            Professional Summary
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {formdata.personal.summary}
                          </p>
                        </div>
                      )}

                      {/* Experience */}
                      {formdata.experience.some((exp) => exp.title || exp.company) && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                            Experience
                          </h3>
                          <div className="space-y-3">
                            {formdata.experience
                              .filter((exp) => exp.title || exp.company)
                              .map((exp) => (
                                <div key={exp.id}>
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="font-semibold text-sm">{exp.title}</p>
                                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                    </span>
                                  </div>
                                  {exp.description && (
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {exp.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Education */}
                      {formdata.education.some((edu) => edu.degree || edu.school) && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                            Education
                          </h3>
                          <div className="space-y-2">
                            {formdata.education
                              .filter((edu) => edu.degree || edu.school)
                              .map((edu) => (
                                <div key={edu.id} className="flex justify-between">
                                  <div>
                                    <p className="font-semibold text-sm">{edu.degree}</p>
                                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {edu.startDate} - {edu.endDate}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      {formdata.skills.some((skill) => skill) && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                            Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {formdata.skills
                              .filter((skill) => skill)
                              .map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
  );
}