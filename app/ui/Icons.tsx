'use client';

import { useState } from "react";

import Image from "next/image";

export function SearchIcon({ className, size }: { className: string, size: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div 
      className="flex relative search-icon"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
      <ToolTip text="Search" pos="right" visible={hover}/>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="20" y1="20" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  );
}

export function PlusIcon({ className, size }: { className: string, size: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="group flex relative plus-icon"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <ToolTip
        text="Attachment"
        pos="top"
        className="attachment-tooltip"
        visible={hover}
      />
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        fill="currentColor"
        viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
      </svg>
    </div>
  );
}

export function SendMessageIcon({ className, size }: { className: string, size: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="group flex relative send-message-icon"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <svg
        className={className}
        fill="currentColor"
        height={size}
        width={size}
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.2 -3.2 38.40 38.40">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M20.7,15.7C20.5,15.9,20.3,16,20,16 s-0.5-0.1-0.7-0.3L17,13.4V22c0,0.6-0.4,1-1,1s-1-0.4-1-1v-8.6l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l4-4 c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.1,0.5-0.1,0.8,0c0.1,0.1,0.2,0.1,0.3,0.2l4,4C21.1,14.7,21.1,15.3,20.7,15.7z"></path>
        </g>
      </svg>
      <ToolTip text="Send Now" pos="top" visible={hover} />
    </div>
  );
}

export function ChevronRightIcon({ className, size }: { className: string, size: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="group flex relative chevron-right-icon"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
      </svg>
      <ToolTip text="Open Sidebar" pos="left" visible={hover} />
    </div>
  );
}

export function SideNavCloseIcon({ className, size, hover }: { className: string, size: number, hover: boolean }) {
  return (
    <div className="group flex relative sidebar-close-icon">
      <Image
        src={`/Icons/Sidebar-${hover ? "2" : "1"}.png`}
        alt="Close Sidebar"
        width={size}
        height={size}
        className={className}
      />
      <ToolTip
        text="Close Sidebar"
        pos="left"
        className="sidebar-close-tooltip"
        visible={hover}
      />
    </div>
  );
};

export function UploadFileIcon({ className, size }: { className: string, size: number }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="currentColor">
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M19.41,7.41l-4.83-4.83C14.21,2.21,13.7,2,13.17,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2 V8.83C20,8.3,19.79,7.79,19.41,7.41z M14.8,15H13v3c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H9.21c-0.45,0-0.67-0.54-0.35-0.85l2.8-2.79 c0.2-0.19,0.51-0.19,0.71,0l2.79,2.79C15.46,14.46,15.24,15,14.8,15z M14,9c-0.55,0-1-0.45-1-1V3.5L18.5,9H14z" />
      </g>
    </svg>
  );
};

// tooltip group-hover:opacity-100 transition-opacity opacity-0 
export function ToolTip({ text, pos, className, visible }: { text: string, pos: "left" | "right" | "top" | "bottom", className?: string, visible: boolean }) {
  function drawArrow() {
    switch (pos) {
      case "left":
        return "h-4 bg-gray-800 rotate-45 transform origin-bottom-right rounded-sm";
      case "right":
        return "h-4 bg-gray-800 rotate-45 transform origin-top-left rounded-sm";
      case "top":
        return "h-2 bg-gray-800 rotate-45 transform origin-top-right";
      case "bottom":
        return "h-3 bg-gray-800 -rotate-45 transform origin-bottom-right -mt-1";
    }
  }

  return (
    <div
      className={`tooltip flex absolute items-center justify-center
      ${visible ? "opacity-100 delay-200 visible" : "opacity-0 delay-0 invisible"}
      ${className ? className : ""}
      ${pos === "left" || pos === "right" ? "flex-row" : "flex-col"} 
      ${pos === "left" ? "flex-row-reverse -right-32" : ""} 
      ${pos === "right" ? "-left-20" : ""}
      ${pos === "top" ? "-top-8 -left-7 w-24" : ""}`}>
      <div className="bg-gray-800 p-1.5 rounded-lg flex-1 text-white">
        {text}
      </div>
      <div
        className={`w-3 inline-block ${
          pos !== "top" ? "overflow-hidden" : ""
        }`}>
        {/* <div className="h-4 bg-gray-800 rotate-45 transform origin-top-left rounded-sm"></div> */}
        <div className={drawArrow()}></div>
      </div>
    </div>
  );
}