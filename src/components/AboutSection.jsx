import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Data Scientist
            </h3>

            <p className="text-muted-foreground">
              As a Computer Science student specializing in Data Science, 
              I focus on transforming data into meaningful insights and intelligent solutions. 
              I work with Data Science and Machine Learning techniques to analyze patterns, 
              build predictive models, and solve real-world problems. 
              Alongside this, I also explore development to create practical and impactful 
              applications powered by data.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving complex problems by turning raw data into clear insights and intelligent solutions. 
              I continuously explore new tools and technologies in Data Science and Machine Learning to expand my 
              skills and build impactful, data-driven projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Analyzing and interpreting data to discover patterns, trends, 
                    and meaningful insights using modern analytical tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building predictive models and intelligent systems that help 
                    solve real-world problems using machine learning techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Visualization</h4>
                  <p className="text-muted-foreground">
                    Creating compelling visual representations of data to communicate insights effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};