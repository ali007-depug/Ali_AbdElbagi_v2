import { useState, useEffect } from "react";
interface TypeWritterProps {
  keyy?:string;
  texts:string;
  typingSpeed:number;
  infinite?:boolean;
}
export default function TypeWritter({ keyy, texts, typingSpeed = 150, infinite }:TypeWritterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < texts.length) {
      const timeOut = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeOut);
    } else if (infinite) {
      // Reset the animation after a delay if infinite loop is enabled
      setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
      }, 1000);
    }
  }, [currentIndex, texts, typingSpeed, infinite,keyy]);

  return (
    <span>
      {currentText}
      <span className="ml-1 border-r-4 border-p-color animate-blink"></span>
    </span>
  );
}
