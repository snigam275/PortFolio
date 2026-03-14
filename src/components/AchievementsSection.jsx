import { ExternalLink } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "50 Days LeetCode Badge",
    description: "Consistently solved problems for 50 days straight on LeetCode, demonstrating dedication to problem-solving and algorithmic thinking.",
    image: "/achievements/achieve1.png",
    link: "https://drive.google.com/file/d/1CEsnD6jxO3o480qDnQVe7qG8zfYoY38d/view?usp=sharing",
    platform: "LeetCode",
  },
  {
    id: 2,
    title: "DevOps Essentials Badge",
    description: "Earned the DevOps Essentials badge by completing foundational DevOps concepts including CI/CD, automation, and modern software delivery practices.",
    image: "/achievements/achieve2.png",
    link: "https://drive.google.com/file/d/1on1w5Gd_YUvXRn852YRqqXt7prdwqOpX/view?usp=sharing",
    platform: "IBM",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Milestones and badges earned through consistency and hard work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {achievements.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                  {item.platform}
                </span>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-1 text-primary text-sm">
                  <ExternalLink size={14} />
                  <span>View Badge</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};