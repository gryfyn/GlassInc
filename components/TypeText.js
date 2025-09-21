"use client";
import { useEffect, useState } from "react";
import "../app/globals.css";

export default function TextType({
  text = "Hello World", // Default to a safe string
  typingSpeed = 75,
  showCursor = true,
  cursorCharacter = "|",
}) {
  const [currentText, setCurrentText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Normalize text to a string, with fallback to empty string
    const targetText = Array.isArray(text) ? (text[0] || "") : (text || "");
    let charIndex = 0;
    let timeout;

    const type = () => {
      if (charIndex < targetText.length) {
        setCurrentText(targetText.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, typingSpeed);
      }
    };

    // Only start typing if targetText exists
    if (targetText) {
      setCurrentText(""); // Reset text on mount or text change
      type();
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [text, typingSpeed]);

  useEffect(() => {
    if (!showCursor) return;
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blink); // Cleanup interval
  }, [showCursor]);

  return (
    <span className="text-type">
      {currentText}
      {showCursor && (
        <span
          className={`text-type__cursor ${
            cursorVisible ? "" : "text-type__cursor--hidden"
          }`}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}