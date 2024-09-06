"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronRightIcon } from "@/app/ui/Icons";

import NavItem from "./NavItem";
import { ToolTip } from "@/app/ui/Icons";

export default function Sidenav() {
  const [showing, setShowing] = useState(false);
  const [iconHover, setIconHover] = useState(false);

  return (
    <>
      {!showing && (
        <button
          onClick={() => setShowing(true)}
          className="menu-open-icon text-gray-300">
          <ChevronRightIcon
            size={30}
            className="text-gray-300 hover:text-black"
          />
        </button>
      )}
      {showing && (
        <section
          onClick={() => setShowing(false)}
          className="fixed inset-0 w-screen h-screen"></section>
      )}
      <>
        <div
          onClick={() => setShowing(!showing)}
          onMouseEnter={() => setIconHover(true)}
          onMouseLeave={() => setIconHover(false)}
          className={`group relative sidebar-action-icon cursor-pointer absolute z-10 transition-all ease-in-out w-6 h-6 ${
            showing ? "ml-0" : "-ml-52"
          }`}>
          <Image
            src={`/Icons/Sidebar-${iconHover ? "2" : "1"}.png`}
            alt="Sidebar"
            width={iconHover ? 6 : 5}
            height={iconHover ? 6 : 5}
          />
          {iconHover && <ToolTip text="Close Sidebar" pos="left" className="close-sidebar-tooltip" />}
        </div>
        <nav
          // onMouseLeave={() => setShowing(false)}
          className={`overflow-hidden z-10 transition-all ease-in-out side-nav flex flex-col bg-black rounded-l-lg items-start text-gray-300 ${
            showing ? "ml-0" : "-ml-48"
          }`}>
          <NavItem icon="Profile" text="Profile" active={false} />
          <NavItem icon="Chats" text="Chats" active={true} />
          <NavItem icon="Sent" text="Sent" active={false} />
          <NavItem icon="Draft" text="Draft" active={false} />
          <NavItem icon="Spam" text="Spam" active={false} />
          <NavItem icon="Trash" text="Trash" active={false} />
          <NavItem icon="ConnectApps" text="Connect Apps" active={false} />
          <div className="lower-nav w-full flex flex-col justify-self-end items-start mt-auto">
            <NavItem icon="Help" text="Help" active={false} />
            <NavItem icon="Rate" text="Rate" active={false} />
            <NavItem icon="About" text="About" active={false} />
          </div>
        </nav>
      </>
    </>
  );
}