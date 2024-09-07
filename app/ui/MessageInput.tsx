"use client";

import { useRef, useState } from "react";
import { useEffect, useCallback } from "react";

import { PlusIcon, SendMessageIcon } from "./Icons";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useAutoResizeTextArea(textAreaRef, parentRef);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target?.value;

    setMessage(val);
  };
  return (
    <div
      ref={parentRef}
      className={`send-message w-full rounded-lg border flex flex-row flex-shrink-0 min-h-14 justify-between items-center ${
        isActive ? "border-black text-black" : "border-gray-300 text-gray-300"
      }`}>
      <PlusIcon
        size={32}
        className={`hover:text-black ${
          isActive ? "text-black" : "text-gray-300"
        }`}
      />
      <textarea
        rows={1}
        className="block w-full resize-none border-none focus:outline-none p-2"
        ref={textAreaRef}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onChange={handleChange}
        value={message}
        placeholder="What's on your mind?"
        />
      <SendMessageIcon
        size={40}
        className={`hover:text-black ${
          isActive ? "text-black" : "text-gray-300"
        }`}
      />
    </div>
  );
}


function useAutoResizeTextArea(
  textareaRef: React.RefObject<HTMLTextAreaElement>,
  parentRef: React.RefObject<HTMLDivElement>
) {
  const resizeTextArea = useCallback(() => {
    if (textareaRef.current && parentRef.current) {
      const textarea = textareaRef.current;
      const parentDiv = parentRef.current;
      const rows = (textarea.scrollHeight - 40) / 24 + 1;
      if (rows >= 6) return;
      textarea.style.height = "auto";
      const newHeight = textarea.scrollHeight;
      textarea.style.height = `${newHeight}px`;
      const minHeight = 55;
      parentDiv.style.height = `${Math.max(newHeight + 10, minHeight)}px`; // Set the parent div height to match the textarea height
    }
  }, [textareaRef, parentRef]);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      resizeTextArea();
      textarea.addEventListener("input", resizeTextArea);

      return () => {
        textarea.removeEventListener("input", resizeTextArea);
      };
    }
  }, [textareaRef, resizeTextArea]);

  return;
}

// Updates the height of a <textarea> when the value changes.
// const useAutosizeTextArea = (
//   textAreaRef: HTMLTextAreaElement | null,
//   parentRef: HTMLDivElement | null,
//   value: string
// ) => {
//   useEffect(() => {
//     if (textAreaRef && parentRef) {
//       // We need to reset the height momentarily to get the correct scrollHeight for the textarea
//       textAreaRef.style.height = "0px";
//       const scrollHeight = textAreaRef.scrollHeight;

//       // We then set the height directly, outside of the render loop
//       // Trying to set this with state or a ref will product an incorrect value.
//       textAreaRef.style.height = scrollHeight + "px";
//       parentRef.style.height = scrollHeight + "px";
//     }
//   }, [textAreaRef, value]);
// };