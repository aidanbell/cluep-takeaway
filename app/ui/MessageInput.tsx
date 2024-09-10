"use client";

import { useRef, useState } from "react";
import { useEffect, useCallback } from "react";
import { createMessage } from "@/app/lib/actions";

import { PlusIcon, SendMessageIcon, UploadFileIcon } from "./Icons";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isAttachmentOpen, setIsAttachmentOpen] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resizeTextArea();
  }, [message]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const val = e.target?.value;
    setMessage(val);
  };

  const resizeTextArea = () => {
    if (textAreaRef.current && parentRef.current) {
      if (message.trim() === "") {
        textAreaRef.current.style.height = "auto";
        parentRef.current.style.height = "55px";
        return;
      }
      const textarea = textAreaRef.current;
      const parentDiv = parentRef.current;
      const rows = (textarea.scrollHeight - 40) / 24 + 1;
      if (rows >= 6) return;
      textarea.style.height = "auto";
      const newHeight = textarea.scrollHeight;
      textarea.style.height = `${newHeight}px`;
      const minHeight = 55;
      parentDiv.style.height = `${Math.max(newHeight + 10, minHeight)}px`; // Set the parent div height to match the textarea height
    }
  }

  async function sendMessage() {
    if (message.trim() === "") return;
    await createMessage(message);
    setMessage("");
    resizeTextArea();
  }

  return (
    <div
      ref={parentRef}
      className={`send-message w-full rounded-lg border flex flex-row flex-shrink-0 min-h-14 justify-between items-center ${
        isActive ? "border-black text-black" : "border-gray-300 text-gray-300"
      }`}>
        <div className="relative attachment-icon" onClick={() => setIsAttachmentOpen(!isAttachmentOpen)}>
          <PlusIcon
            size={32}
            className={`hover:text-black transition-all  ${
              isActive ? "text-black" : "text-gray-300"
            } ${isAttachmentOpen ? "rotate-45" : ""}`}
          />
          {isAttachmentOpen && (
            <div className="attachment-options absolute whitespace-nowrap -top-12 -left-14 flex flex-row bg-white border border-gray-300 rounded-lg p-3">
              <UploadFileIcon className="text-gray-300 inline-block" size={24} />
              <span className="ml-2">Upload from your computer</span>
            </div>
          )}
        </div>
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
        <button onClick={sendMessage} name="send" className="send-message-icon">
          <SendMessageIcon
            size={40}
            className={`hover:text-black ${
              isActive ? "text-black" : "text-gray-300"
            }`}
          />
        </button>
    </div>
  );
}