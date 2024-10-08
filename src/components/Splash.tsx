// Splash.js

import { useState, useEffect, useRef } from "react";
import BinaryTextEffect from "../functions/BinaryTextEffect";

const Splash = ({ setSplashHeight }: any) => {
  const trueText = "Hi, my name is Adnan";
  const [text, setText] = useState("000 00 1011 11 01011");
  const trueSubText = "and I am a software engineer";
  const ref = useRef<HTMLDivElement | null>(null);
  const [subText, setSubText] = useState("111 0 01 0 111010111 01001110");

  useEffect(() => {
    if (ref.current) {
      setSplashHeight(ref.current.clientHeight);
      setTimeout(() => {
        BinaryTextEffect(trueText, setText);
        setTimeout(() => BinaryTextEffect(trueSubText, setSubText), 1100);
      }, 800);
    }
  }, []);

  return (
    <div
      className="flex h-screen flex-col items-center justify-center text-center font-almamono text-4xl text-white sm:text-7xl"
      id="splash"
      ref={ref}
    >
      <div className="splash z-30 flex flex-col items-center justify-center gap-6">
        <h1>{text}</h1>
        <h2 className="text-lg sm:text-3xl">{subText}</h2>
      </div>
    </div>
  );
};

export default Splash;
