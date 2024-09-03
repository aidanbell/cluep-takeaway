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
  );
}

export function SendMessageIcon({ className, size }: { className: string, size: number }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      height={size}
      width={size}
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3.2 -3.2 38.40 38.40">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M20.7,15.7C20.5,15.9,20.3,16,20,16 s-0.5-0.1-0.7-0.3L17,13.4V22c0,0.6-0.4,1-1,1s-1-0.4-1-1v-8.6l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l4-4 c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.1,0.5-0.1,0.8,0c0.1,0.1,0.2,0.1,0.3,0.2l4,4C21.1,14.7,21.1,15.3,20.7,15.7z"></path>
      </g>
    </svg>
  );
}

export function ChevronRightIcon({ className, size }: { className: string, size: number }) {
  return (
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
  );
}