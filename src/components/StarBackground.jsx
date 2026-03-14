import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleResize = () => generateStars();
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 5000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        blinkDelay: Math.random() * 6,
        blinkDuration: Math.random() * 3 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const newMeteors = [];
    for (let i = 0; i < 5; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 6,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  const getStarStyle = (star, isHovered) => {
    if (isHovered) {
      const dx = star.x - mousePos.x;
      const dy = star.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radius = 12;
      const force = (radius - distance) / radius;
      const angle = Math.atan2(dy, dx);
      const zigzag = Math.sin(star.id * 1.5) * 2;
      const moveX = Math.cos(angle + zigzag) * force * 15;
      const moveY = Math.sin(angle + zigzag) * force * 15;

      return {
        width: star.size + "px",
        height: star.size + "px",
        left: star.x + "%",
        top: star.y + "%",
        opacity: 1,
        transform: `translate(${moveX}px, ${moveY}px) scale(${1 + force * 2})`,
        transition: "transform 0.15s ease-out, opacity 0.2s ease",
        boxShadow: `0 0 ${6 + force * 8}px ${2 + force * 3}px rgba(167, 139, 250, 0.9)`,
        zIndex: 10,
        animation: "none",
      };
    }

    return {
      width: star.size + "px",
      height: star.size + "px",
      left: star.x + "%",
      top: star.y + "%",
      "--blink-duration": star.blinkDuration + "s",
      "--blink-delay": star.blinkDelay + "s",
      transform: "translate(0, 0)",
      transition: "transform 0.4s ease-out",
    };
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        const dx = star.x - mousePos.x;
        const dy = star.y - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isHovered = distance < 12;

        return (
          <div
            key={star.id}
            className={isHovered ? "star" : "star star-twinkle"}
            style={getStarStyle(star, isHovered)}
          />
        );
      })}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="animate-meteor"
          style={{
            position: "absolute",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            width: meteor.size * 80 + "px",
            height: "2px",
            background: `linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,1) 100%)`,
            borderRadius: "9999px",
            boxShadow: "0 0 6px 1px rgba(255, 255, 255, 0.6)",
            transform: "rotate(35deg)",
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
};