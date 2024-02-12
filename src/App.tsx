import { useState, useEffect } from "react";

import Splash from "./components/Splash";
import Blob from "./components/Blob";
import Loading from "./components/Loading";
import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("splash");
  const [splashHeight, setSplashHeight] = useState(0);
  const [aboutMeHeight, setAboutMeHeight] = useState(0);
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [contactMeHeight, setContactMeHeight] = useState(0);
  const [clientScroll, setClientScroll] = useState(window.scrollY);
  useEffect(() => {
    //add scroll event listener
    window.addEventListener("scroll", () => {
      setClientScroll(window.scrollY);
      //get the current section
      if (window.scrollY < splashHeight - 250) {
        setCurrentSection("splash");
      } else if (window.scrollY < splashHeight + aboutMeHeight - 250) {
        setCurrentSection("aboutMe");
      } else if (window.scrollY < splashHeight + aboutMeHeight + projectsHeight - 250) {
        setCurrentSection("projects");
      } else if (window.scrollY < splashHeight + aboutMeHeight + projectsHeight + contactMeHeight - 250) {
        setCurrentSection("contactMe");
      }
    });

    console.log(splashHeight, clientScroll, currentSection);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    //remove scroll event listener
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [clientScroll]);
  return (
    <div>
      <Blob />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <Splash setSplashHeight={setSplashHeight} />
          <Navigation currentSection={currentSection} />
          <AboutMe setAboutMeHeight={setAboutMeHeight} />
          <Projects setProjectsHeight={setProjectsHeight} />
          <div className="mb-44 mt-36 flex justify-end">
            <ContactMe setContactMeHeight={setContactMeHeight} />
          </div>
          <div className="flex w-full justify-center text-center">
            <p className="z-30 mb-2 cursor-pointer place-self-center self-center font-almamonoLight text-sm text-white">
              Want to see how I made this page? It's on{" "}
              <a href="https://github.com/AdnanSilajdzic/Portfolio" className="font-bold underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
