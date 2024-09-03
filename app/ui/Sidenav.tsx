"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronRightIcon } from "@/app/ui/Icons";

import NavItem from "./NavItem";

export default function Sidenav() {
  const [showing, setShowing] = useState(false);

  return (
    <>
      {!showing ? (
        <button onClick={() => setShowing(true)} className="menu-open-icon text-gray-300">
          <ChevronRightIcon size={30} className="text-gray-300 hover:text-black" />
        </button>
      ) : (
        <nav onMouseLeave={() => setShowing(false)} className="side-nav fixed w-48 flex flex-col bg-black rounded-l-lg items-start text-gray-300">
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
      )}
    </>
  );
}