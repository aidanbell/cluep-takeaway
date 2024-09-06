"use client";

import { useState } from "react";

import { ChevronRightIcon, SideNavCloseIcon } from "@/app/ui/Icons";

import { NavItem } from "./Buttons";
import { ToolTip } from "@/app/ui/Icons";

export default function Sidenav() {
  const [showing, setShowing] = useState(false);
  const [iconHover, setIconHover] = useState(false);

  const navItems = [
    { icon: "Profile", text: "Profile", active: false },
    { icon: "Chats", text: "Chats", active: true },
    { icon: "Sent", text: "Sent", active: false },
    { icon: "Draft", text: "Draft", active: false },
    { icon: "Spam", text: "Spam", active: false },
    { icon: "Trash", text: "Trash", active: false },
    { icon: "ConnectApps", text: "Connect Apps", active: false },
    { icon: "Help", text: "Help", active: false },
    { icon: "Rate", text: "Rate", active: false },
    { icon: "About", text: "About", active: false },
  ];

  function handleSideNav() {
    setShowing(!showing);

    const mainContent = document.querySelector("main.content") as HTMLElement;

    if (mainContent) {
      mainContent.style.transform = showing
        ? "translateX(0)"
        : "translateX(250px)";
    }
  }

  return (
    <>
      <div
        className={`h-full bg-black rounded-l-lg text-gray-300 transition-all duration-500 z-10 flex-shrink-0 ${
          showing ? "w-[180px]" : "w-0"
        }`}>
          <div
            onClick={() => {
              console.log("clicked");
              console.log(showing);
              setShowing(!showing);
            }}
            onMouseEnter={() => setIconHover(true)}
            onMouseLeave={() => setIconHover(false)}
            className={`group sidebar-action-icon cursor-pointer absolute top-1/2 z-10 transition-translate duration-500 ease-in-out w-6 h-6 ${
              showing ? "translate-x-48" : "transform:none"
            }`}>
              {showing ? (
                <SideNavCloseIcon
                  size={iconHover ? 7 : 5}
                  hover={iconHover}
                  className="close-sidebar-tooltip"
                />
              ) : (
                <ChevronRightIcon
                  size={30}
                  className="text-gray-300 hover:text-black"
                />
              )}
          </div>
        {showing && (
          <nav
          // onMouseLeave={() => setShowing(false)}
          // className={`overflow-hidden z-10 transition-all ease-in-out side-nav flex flex-col bg-black rounded-l-lg items-start text-gray-300 ${
          //   showing ? "ml-0" : "-ml-48"
          // }`}>
          className="overflow-hidden flex flex-col h-full"
          >
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                text={item.text}
                active={item.active}
                navOpen={showing}
              />
            ))}
            {/* <NavItem icon="Profile" text="Profile" active={false} />
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
            </div> */}
          </nav>
        )}
      </div>
    </>
  );
}
