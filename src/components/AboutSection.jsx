import { Code, Trophy, BookOpen, Music, Brain, Database, BarChart3, Terminal } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
  const [activeCoding, setActiveCoding] = useState("When I'm Coding");

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-5">

            {/* My Journey */}
            <div className="gradient-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground mb-3">
                My Journey
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Hi! I'm <span className="text-primary font-semibold">Shreya Nigam</span>, a passionate
                Data Science student with a deep fascination for transforming raw data into
                meaningful insights and intelligent solutions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                My journey began with curiosity about how data can tell stories. It has evolved
                into a focused expertise in Data Science and Machine Learning — where I specialize
                in building predictive models, performing exploratory data analysis, and creating
                impactful visualizations using Python and its powerful ecosystem.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                What drives me is the intersection of data and real-world impact — finding patterns
                that solve genuine problems. I'm constantly expanding my skills through hands-on
                projects and keeping up with emerging technologies in AI and Data Science.
              </p>
            </div>

            {/* My Approach */}
            <div className="gradient-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground mb-3">
                My Approach
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I enjoy solving complex problems by turning raw data into clear insights.
                I believe in continuous learning — constantly exploring new tools and
                technologies in Data Science and ML to build impactful, data-driven
                projects that create real value.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">

            {/* What I Do — centered */}
            <div className="flex justify-center">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground shadow-md shadow-primary/30">
                What I Do
              </span>
            </div>

            {/* Toggle Buttons — centered */}
            <div className="flex justify-center gap-2">
              {["When I'm Coding", "When I'm Not Coding"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCoding(tab)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:-translate-y-0.5
                    ${activeCoding === tab
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "bg-secondary/70 text-foreground hover:bg-secondary"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* When I'm Coding */}
            {activeCoding === "When I'm Coding" && (
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: Brain,
                    title: "Machine Learning",
                    desc: "Building predictive models using Scikit-learn — applying regression, classification, and clustering to solve real-world problems.",
                  },
                  {
                    icon: Database,
                    title: "Data Analysis",
                    desc: "Performing in-depth EDA using Pandas and NumPy — cleaning datasets, uncovering patterns, and deriving actionable insights.",
                  },
                  {
                    icon: BarChart3,
                    title: "Data Visualization",
                    desc: "Creating visual stories using Matplotlib, Seaborn, and Power BI — turning numbers into intuitive charts and dashboards.",
                  },
                  {
                    icon: Terminal,
                    title: "Development & Problem Solving",
                    desc: "Solving DSA challenges in Java using OOP and Collections Framework, while building responsive web apps with React and JavaScript.",
                  },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={i}
                    className="gradient-border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-default"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-full bg-primary/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">{title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* When I'm Not Coding */}
            {activeCoding === "When I'm Not Coding" && (
              <div className="flex flex-col gap-3">
                {[
                  { icon: BookOpen, label: "Reading" },
                  { icon: Music, label: "Listening to Music" },
                  { icon: Trophy, label: "Playing Badminton" },
                ].map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="gradient-border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-full bg-primary/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
};