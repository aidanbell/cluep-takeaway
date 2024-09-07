import Image from "next/image";

export function TaskButton({text}: {text: string}) {
  return (
    <button className="task-button rounded-full border border-gray-300 shrink-0 hover:border-black hover:text-black transition-all ease-in-out hover:transform hover:-translate-y-2">
      {text}
    </button>
  );
};

export function NavItem({ icon, text, active, key, navOpen }: { icon: string, text: string, active: boolean, key: number, navOpen: boolean }) {
  return (
    <div
      className={`nav-item transform opacity-0 -translate-x-full transition-transform transition-opacity duration-500 ease-out delay-500 flex flex-row items-center m-1 pr-2 hover:rounded-lg hover:bg-gray-800 ${
        active ? "bg-gray-500 rounded-lg" : "bg-black"
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