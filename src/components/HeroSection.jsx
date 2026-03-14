import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TypingText = () => {
  const [displayed, setDisplayed] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    const text = "Data Scientist";
    let i = 0;

    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        timeoutRef.current = setTimeout(type, 150);
      } else {
        timeoutRef.current = setTimeout(() => {
          i = 0;
          type();
        }, 2000);
      }
    };

    type();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []); // empty array — sirf ek baar mount hoga

  return (
    <span className="text-3xl md:text-5xl font-bold text-primary drop-shadow-[0_0_18px_rgba(139,92,246,0.7)]">
      {displayed}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left — Text */}
          <div className="space-y-5 text-center md:text-left max-w-xl">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Shreya</span>
              <span className="opacity-0 animate-fade-in-delay-2"> Nigam</span>
            </h1>

            {/* Only this part re-renders — baaki sab static */}
            <div className="min-h-[48px]">
              <TypingText />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
              Passionate about transforming data into meaningful insights.
              Specializing in Data Science & ML, I build predictive models and
              intelligent solutions — while exploring the intersection of data
              and modern web development.
            </p>

            <div className="pt-2 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-delay-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-400 to-primary animate-spin-slow opacity-75 blur-sm" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary to-purple-400 opacity-60" />
              <img
                src="/profile.png"
                alt="Shreya Nigam"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover object-top border-2 border-primary/30"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};