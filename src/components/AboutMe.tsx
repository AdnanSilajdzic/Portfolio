import { useEffect, useState, useRef } from "react";
import profileImg from "../assets/images/profile-image.jpg";
import TypingTextEffect from "../functions/TypingTextEffect";

const AboutMe = ({ setAboutMeHeight }: any) => {
  const trueText = "About me";
  const [text, setText] = useState("|");
  const aboutMeRef = useRef<HTMLDivElement | null>(null); // Specify the type
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      setAboutMeHeight(ref.current.clientHeight);
    }
    const handleScroll = () => {
      // Ensure that the ref is not null before accessing it.
      if (aboutMeRef.current) {
        // Get the position of the AboutMe component relative to the viewport.
        const element = aboutMeRef.current;
        const rect = element.getBoundingClientRect();

        // Check if the AboutMe component is in the viewport.
        if (rect.top >= 0 && (window.innerWidth <= 768 || rect.bottom <= window.innerHeight + 40)) {
          //add css class to the about me section
          element.classList.add("rise-and-appear");
          // Start the typing text animation.
          setTimeout(() => {
            TypingTextEffect(trueText, setText);
          }, 900);

          // Remove the scroll event listener to avoid continuous animations.
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    // Attach the scroll event listener when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-30 mb-36 overflow-y-hidden" ref={ref} id="aboutMe">
      <div ref={aboutMeRef} className="flex flex-wrap-reverse justify-center gap-20 opacity-0">
        <div className="z-30 mb-7 flex w-3/4 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:w-1/3 sm:text-4xl">
          <h1 className="font-almamono">{text}</h1>
          <p className="max-w-full text-justify text-sm sm:text-lg">
            I'm a software engineer with a passion for creating innovative and creative solutions to complex problems. I
            love learning new things and I am always looking for new challenges. My main focus is on full-stack web
            development, but I am also capable of working on AI and machine learning projects.
          </p>
        </div>
        <img
          className="z-30 aspect-square w-3/4 min-w-[250px] rounded-xl bg-white object-cover sm:w-1/3"
          src={profileImg}
        ></img>
      </div>
    </div>
  );
};

export default AboutMe;
