import Image from "next/image";

export default function NavItem({ icon, text, active }: { icon: string, text: string, active: boolean }) {
  return (
    <div className={`nav-item flex flex-row items-center m-1 pr-2 hover:rounded-lg hover:bg-gray-800 ${active ? "bg-gray-500 rounded-lg" : "bg-black"}`}>
      <Image 
        src={`/Icons/${icon}.png`}
        alt={text}
        width={40}
        height={40}
        className="icon m-2"
      />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}