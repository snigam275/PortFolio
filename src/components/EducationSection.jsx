import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    detail: "CGPA: 7.73",
    period: "August 2023 – Present",
    current: true,
  },
  {
    institution: "St. Xavier's School",
    location: "Deoria, Uttar Pradesh",
    degree: "Intermediate (Class XII)",
    detail: "Percentage: 76.2%",
    period: "April 2021 – March 2022",
    current: false,
  },
  {
    institution: "Gurukul Mission",
    location: "Deoria, Uttar Pradesh",
    degree: "Matriculation (Class X)",
    detail: "Percentage: 79.6%",
    period: "April 2019 – March 2020",
    current: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Academic background with focus on Computer Science, Data Science &
          Machine Learning.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-6 items-start">
                {/* Icon Circle */}
                <div className="relative z-10 flex-shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary/40 shadow-md">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  {edu.current && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-ping" />
                  )}
                  {edu.current && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-card rounded-xl p-5 border border-white/10 shadow-sm hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-base text-foreground">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{edu.degree}</p>

                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {edu.detail}
                  </div>

                  {edu.current && (
                    <span className="ml-2 inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">
                      Currently Enrolled
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};