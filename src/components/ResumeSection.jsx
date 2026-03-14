import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Download, GraduationCap, Wrench, FolderGit2, Trophy,
  ScrollText, MapPin, Calendar, Mail, Phone, Github, Linkedin
} from "lucide-react";

const RESUME_DOWNLOAD_LINK =
  "https://drive.google.com/uc?export=download&id=19TaIH6TmN1gzp7vV9A7TLfS2TfdYLSIR";

const contactInfo = [
  { icon: Mail, label: "nigamshreya21@gmail.com", href: "mailto:nigamshreya21@gmail.com" },
  { icon: Phone, label: "+91-6306444186", href: "tel:+916306444186" },
  { icon: Linkedin, label: "linkedin.com/in/shreya275", href: "https://www.linkedin.com/in/shreya275" },
  { icon: Github, label: "github.com/snigam275", href: "https://www.github.com/snigam275" },
];

const tabs = [
  { key: "education", label: "Education", icon: GraduationCap },
  { key: "skills", label: "Skills", icon: Wrench },
  { key: "projects", label: "Projects", icon: FolderGit2 },
  { key: "extracurricular", label: "Extracurricular", icon: Trophy },
  { key: "certificates", label: "Certificates", icon: ScrollText },
];

const educationData = [
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

const skillsData = [
  { category: "Languages", items: ["Python", "SQL", "C++", "Java", "C", "HTML", "CSS", "JavaScript", "React"] },
  { category: "Libraries", items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"] },
  { category: "Tools/Technologies", items: ["Power BI", "Excel", "Git", "GitHub", "MySQL", "MongoDB"] },
  { category: "Soft Skills", items: ["Problem-Solving", "Team Player", "Adaptability", "Critical Thinking"] },
];

const projectsData = [
  {
    name: "California Housing Price Prediction",
    period: "July 2025",
    points: [
      "Built a machine learning pipeline to analyze and predict California housing prices.",
      "Performed data cleaning and feature engineering; trained models with Linear Regression and Random Forest.",
      "Developed an interactive Power BI dashboard with KPIs and geo-visualizations.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
  },
  {
    name: "AI Sports Sales Coach Chatbot",
    period: "April 2025",
    points: [
      "Developed an AI-driven chatbot to automate sales-related queries using domain-specific keyword intelligence.",
      "Integrated external APIs for real-time responses, deployed via Streamlit-based web interface.",
      "Improved user engagement through an interactive UI/UX.",
    ],
    tech: ["Python", "Streamlit", "Pandas", "NLP", "Jupyter Notebook"],
  },
  {
    name: "Pandemic Data Insights",
    period: "April 2025",
    points: [
      "Conducted EDA to uncover global mortality trends using WHO's excess death estimates dataset.",
      "Generated analytical visualizations including scatter plots, boxplots, and trend lines.",
      "Delivered a data-driven dashboard highlighting key risk demographics and high-impact countries.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Jupyter Notebook"],
  },
];

const extracurricularData = [
  {
    tag: "HACKATHON",
    title: "Smart India Hackathon",
    org: "LPU",
    period: "August 2024",
    points: [
      "Built a web platform to predict students likely to drop out in a semester using ML models.",
      "Identified students requiring counselling based on academic performance and attendance data.",
      "Developed a full-stack website with prediction dashboard for college administration.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "NodeJs", "MongoDB"],
  },
  {
    tag: "OPEN SOURCE",
    title: "Google Summer of Code (GSoC)",
    org: "Google Open Source",
    period: "2024",
    points: [
      "Selected as a contributor for open source development under Google's flagship program.",
      "Worked on real-world open source projects with mentorship from industry experts.",
      "Contributed meaningful code improvements and documentation to the assigned organization.",
    ],
    tech: ["Open Source", "Git", "GitHub"],
  },
];

const certificatesData = [
  { name: "Cloud Computing", org: "NPTEL", period: "November 2025" },
  { name: "Introduction to Agile Development and Scrum", org: "Coursera", period: "September 2025" },
  { name: "Introduction to DevOps", org: "Coursera", period: "September 2025" },
  { name: "50 Days Coding Streak Badge", org: "LeetCode", period: "December 2025" },
  { name: "DevOps Essentials Badge", org: "Coursera", period: "December 2025" },
];

// Tech badges with hover
const TechBadges = ({ items }) => (
  <div className="flex flex-wrap gap-1.5 mt-3">
    {items.map((t, j) => (
      <span
        key={j}
        className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-medium border border-primary/20 cursor-default transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105"
      >
        {t}
      </span>
    ))}
  </div>
);

const FullCard = ({ children }) => (
  <div className={cn(
    "bg-card border border-white/10 rounded-xl p-5 w-full",
    "transition-all duration-300 ease-out",
    "hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
  )}>
    {children}
  </div>
);

export const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="resume" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Resume</span>
        </h2>

        {/* Contact Info — horizontal one line */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-10">
          {contactInfo.map(({ icon: Icon, label, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              {label}
            </a>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                activeTab === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}>
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* EDUCATION */}
        {activeTab === "education" && (
          <div className="flex flex-col gap-4">
            {educationData.map((edu, i) => (
              <FullCard key={i}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                      {edu.current ? "CURRENT" : "COMPLETED"}
                    </p>
                    <h3 className="font-bold text-base text-foreground">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4 mt-1">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 mb-3">{edu.degree}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20 transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-default">
                    {edu.detail}
                  </span>
                  {edu.current && (
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20 transition-all duration-200 hover:bg-green-500 hover:text-white hover:scale-105 cursor-default">
                      Currently Enrolled
                    </span>
                  )}
                </div>
              </FullCard>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="flex flex-col gap-4">
            {skillsData.map((s, i) => (
              <FullCard key={i}>
                <h3 className="text-sm font-semibold text-primary mb-3">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item, j) => (
                    <span key={j}
                      className="px-2.5 py-1 rounded-full bg-secondary/60 text-foreground text-xs border border-white/10 cursor-default transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105">
                      {item}
                    </span>
                  ))}
                </div>
              </FullCard>
            ))}
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div className="flex flex-col gap-4">
            {projectsData.map((p, i) => (
              <FullCard key={i}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">PROJECT</p>
                    <h3 className="font-bold text-base text-foreground">{p.name}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4 mt-1">{p.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5 mb-2">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <TechBadges items={p.tech} />
              </FullCard>
            ))}
          </div>
        )}

        {/* EXTRACURRICULAR */}
        {activeTab === "extracurricular" && (
          <div className="flex flex-col gap-4">
            {extracurricularData.map((e, i) => (
              <FullCard key={i}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{e.tag}</p>
                    <h3 className="font-bold text-base text-foreground">{e.title}</h3>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4 mt-1">{e.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5 mb-2">
                  {e.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <TechBadges items={e.tech} />
              </FullCard>
            ))}
          </div>
        )}

        {/* CERTIFICATES */}
        {activeTab === "certificates" && (
          <div className="flex flex-col gap-4">
            {certificatesData.map((c, i) => (
              <FullCard key={i}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{c.name}</h3>
                    <p className="text-xs text-primary mt-0.5">{c.org}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap ml-4">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    {c.period}
                  </div>
                </div>
              </FullCard>
            ))}
          </div>
        )}

        {/* Download Button */}
        <div className="flex justify-center mt-10">
          <a href={RESUME_DOWNLOAD_LINK} download="ShreyaNigam_Resume.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg">
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};