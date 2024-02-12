import { useState } from "react";

const Tooltip = ({ text, children }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {children}
      {isHovered && (
        <div className="absolute left-0 top-0 -translate-x-20 transform rounded-md bg-gray-800 p-2 text-white">
          {text}
        </div>
      )}
    </div>
  );
};

const Navigation = ({ currentSection }: any) => {
  const getTooltipText = (section: string) => {
    switch (section) {
      case "splash":
        return "Start";
      case "aboutMe":
        return "About Me";
      case "projects":
        return "Projects";
      case "contactMe":
        return "Contact Me";
      default:
        return "";
    }
  };

  const scrollToSection = (section: string) => {
    const sectionRef = document.getElementById(section);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-0 z-50 hidden h-full w-1/12 cursor-pointer flex-col items-center justify-center gap-6 text-white lg:flex">
      <Tooltip text={getTooltipText("splash")}>
        <div
          className={`bg-transpared h-8 w-8 rounded-full ${
            currentSection === "splash" ? "outline" : "outline-dashed"
          } sm:block`}
          onClick={() => scrollToSection("splash")}
        ></div>
      </Tooltip>
      <Tooltip text={getTooltipText("aboutMe")}>
        <div
          className={`h-8 w-8 cursor-pointer rounded-full bg-transparent ${
            currentSection === "aboutMe" ? "outline" : "outline-dashed"
          }`}
          onClick={() => scrollToSection("aboutMe")}
        ></div>
      </Tooltip>
      <Tooltip text={getTooltipText("projects")}>
        <div
          className={`h-8 w-8 cursor-pointer rounded-full bg-transparent ${
            currentSection === "projects" ? "outline" : "outline-dashed"
          }`}
          onClick={() => scrollToSection("projects")}
        ></div>
      </Tooltip>
      <Tooltip text={getTooltipText("contactMe")}>
        <div
          className={`h-8 w-8 cursor-pointer rounded-full bg-transparent ${
            currentSection === "contactMe" ? "outline" : "outline-dashed"
          }`}
          onClick={() => scrollToSection("contactMe")}
        ></div>
      </Tooltip>
    </div>
  );
};

export default Navigation;
