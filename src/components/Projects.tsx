import ProjectFire from "./ProjectFire";
import ProjectPieAI from "./ProjectPieAI";
import WeatherApi from "./WeatherApi";
import DoodleVision from "./DoodleVision";
import { useEffect, useRef } from "react";
const Projects = ({ setProjectsHeight }: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      setProjectsHeight(ref.current.clientHeight);
    }
  }, []);
  return (
    <div className="z-30 flex flex-col items-center justify-center" ref={ref} id="projects">
      <h1 className="mb-10 w-3/4 text-center font-almamonoLight text-3xl text-white sm:mb-20 sm:text-5xl">Projects</h1>
      <div className="mt-20 flex flex-col gap-20 overflow-x-hidden">
        <ProjectFire />
        <ProjectPieAI />
        <WeatherApi />
        <DoodleVision />
      </div>
    </div>
  );
};

export default Projects;
