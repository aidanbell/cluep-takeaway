import PlusSVG from "@/public/Icons/add_black_24dp.svg";

export function SearchIcon({ className, size }: { className: string, size: number }) {
  return (
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
  );
}

export function PlusIcon({ className, size }: { className: string, size: number }) {
  return (
    <PlusSVG
      className={className}
      width={size}
      height={size}
    />
  );
}