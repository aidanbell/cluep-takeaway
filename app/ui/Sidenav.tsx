"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import { ChevronRightIcon, SideNavCloseIcon } from "@/app/ui/Icons";

import { NavItem, ProfileButton } from "./Buttons";

export default function Sidenav() {
  const [showing, setShowing] = useState(false);
  const [iconHover, setIconHover] = useState(false);
  const [activeItem, setActiveItem] = useState("Chats");

  const { data: session, status } = useSession();

  const navItems = [
    { icon: "Profile", text: session?.user?.name },
    { icon: "Chats", text: "Chats" },
    { icon: "Sent", text: "Sent" },
    { icon: "Draft", text: "Draft" },
    { icon: "Spam", text: "Spam" },
    { icon: "Trash", text: "Trash" },
    { icon: "ConnectApps", text: "Connect Apps" },
    { icon: "Help", text: "Help" },
    { icon: "Rate", text: "Rate" },
    { icon: "About", text: "About"},
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

  function handleActiveItem(item: string) {
    setActiveItem(item);
  }

  return (
    <>
      <div
        className={`h-full bg-black rounded-l-lg text-gray-300 transition-all duration-500 z-10 flex-shrink-0 ${
          showing ? "w-[180px]" : "w-0"
        }`}>
          <div
            onClick={() => setShowing(!showing)}
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
          <nav className={`overflow-hidden flex flex-col h-full transition-color duration-200 ${iconHover ? "text-gray-600" : "text-gray-300"}`}>
            {navItems.map((item, index) => {
              if (index > 0) {
                return(
                  <NavItem
                    key={index}
                    action={handleActiveItem}
                    icon={item.icon}
                    text={item.text || ''}
                    active={item.icon === activeItem}
                    navOpen={showing}
                  />
                );
              } else {
                return(
                  <ProfileButton
                    key={index}
                    name={item.text || ''}
                    image={session?.user?.image || ''}
                    navOpen={showing}
                  />
                );
              }
            })}
          </nav>
        )}
      </div>
    </>
  );
}
