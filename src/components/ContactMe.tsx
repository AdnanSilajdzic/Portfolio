import { useState, useEffect, useRef } from "react";
import MagicText from "./MagicText";
import TypingTextEffect from "../functions/TypingTextEffect";
import emailjs from "@emailjs/browser";

const ContactMe = ({ setContactMeHeight }: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [placeholderText, setPlaceholderText] = useState("" as string);
  const [email, setEmail] = useState("" as string);
  const [message, setMessage] = useState("" as string);
  const [isEmailValid, setIsEmailValid] = useState(false as boolean);
  const [isError, setIsError] = useState(false as boolean);
  const [sendingMessage, setSendingMessage] = useState("Send" as string);
  const placeholderTexts = [
    "How did you make this glowing blob follow my mouse?!",
    "What shampoo do you use?",
    "I love your website!",
    "Are you single? I'm asking for a friend 😳",
    "Why haven't we started working together yet? 😤",
    "Roses are red, \nViolets are blue, \n404 page not found, \nbut I found you!",
    "Stop reading the placeholder texts and send me a message!",
  ];

  function sendEmail() {
    //check if email and message are empty
    if (email === "" || message === "") {
      setIsError(true);
      alert("Please fill in all fields");
      return;
    }
    //check if email is valid
    if (!email.includes("@") || !email.includes(".")) {
      setIsError(true);
      alert("Please enter a valid email");
      return;
    }
    var templateParams = {
      email: email,
      message: message,
    };
    setSendingMessage("Sending...");
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      function (response) {
        setSendingMessage("Sent!");
        setIsError(false);
        setMessage("");
        setEmail("");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        setSendingMessage("Failed to send :/");
        console.log("FAILED...", error);
      }
    );
  }

  useEffect(() => {
    if (ref.current) {
      setContactMeHeight(ref.current.clientHeight);
    }
    let index = 0;
    const interval = setInterval(() => {
      if (index === placeholderTexts.length - 1) index = 0;
      else index++;
      TypingTextEffect(placeholderTexts[index], setPlaceholderText, 30);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="z-30 flex w-full flex-col flex-wrap items-center justify-center gap-7 font-almamonoLight text-5xl text-white"
      ref={ref}
      id="contactMe"
    >
      <h1 className="mb-20">Contact me</h1>
      <div className="flex flex-wrap justify-center gap-14">
        <div className="flex w-10/12 flex-col gap-5 md:w-1/2">
          <label htmlFor="email" className="-mb-5 font-almamono text-2xl text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            className={`w-full rounded-xl bg-[rgba(29,33,43,0.68)] p-3 font-almamono text-sm text-white sm:text-xl ${
              isError && !isEmailValid ? "border-2 border-red-500" : ""
            }`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSendingMessage("Send");
              if (e.target.value.includes("@") && e.target.value.includes(".")) setIsEmailValid(true);
              else setIsEmailValid(false);
            }}
          />
          <label htmlFor="message" className="-mb-5 font-almamono text-2xl text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className={`max-h-60 w-full rounded-xl bg-[rgba(29,33,43,0.68)] p-3 font-almamono text-sm text-white sm:text-xl ${
              isError && message === "" ? "border-2 border-red-500" : ""
            }`}
            placeholder={placeholderText}
            rows={10}
            value={message}
            onChange={(e) => {
              setSendingMessage("Send");
              setMessage(e.target.value);
            }}
          ></textarea>

          <button
            type="submit"
            onClick={sendEmail}
            className={`w-40 self-center bg-transparent font-almamono text-2xl text-white transition-all duration-150 ${
              sendingMessage === "Send" ? "hover:scale-110" : "cursor-default"
            }`}
          >
            {sendingMessage}
          </button>
        </div>
        <MagicText />
      </div>
    </div>
  );
};

export default ContactMe;
