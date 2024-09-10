"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export function TaskButton({text}: {text: string}) {
  return (
    <button className="task-button rounded-full border border-gray-300 shrink-0 hover:border-black hover:text-black transition-all ease-in-out hover:transform hover:-translate-y-2">
      {text}
    </button>
  );
};

export function NavItem({ icon, text, active, navOpen, action }: { icon: string, text: string, active: boolean, navOpen: boolean, action: (item: string) => void }) {
  return (
    <div
      onClick={() => action(icon)}
      className={`nav-item transform opacity-0 -translate-x-full transition-transform transition-opacity duration-500 ease-out delay-500 flex flex-row items-center m-1 pr-2 ${
        active
          ? "bg-gray-500 rounded-lg"
          : "bg-black hover:rounded-lg hover:bg-gray-800"
      } ${navOpen ? "open" : ""}`}>
      <Image
        src={`/Icons/${icon}.png`}
        alt={text}
        width={40}
        height={40}
        className="icon m-2"
      />
      <span>{text}</span>
    </div>
  );
};

export function ProfileButton({ name, image, navOpen }: { name: string, image: string, navOpen: boolean }) {
  const [active, setActive] = useState(false);
  return (
    <div
    onClick={() => {
      if (active) {
        signOut();
      } else {
        setActive(!active);
      }
    }}
      className={`nav-item transform opacity-0 -translate-x-full transition-transform transition-opacity duration-500 ease-out delay-500 flex flex-row items-center m-1 pr-2 ${
        active
          ? "bg-gray-500 rounded-lg"
          : "bg-black hover:rounded-lg hover:bg-gray-800"
      } ${navOpen ? "open" : ""}`}>
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-lg m-2 cursor-pointer"
      />
      <span>{active ? "Log out?" : name}</span>
    </div>
  );
};