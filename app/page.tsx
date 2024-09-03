import Image from "next/image";

import { SearchIcon, PlusIcon } from "./ui/Icons";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto mt-auto mb-0 h-600 center justify-between rounded-lg border border-gray-300">
      <div className="content flex flex-col">
        <SearchIcon size={50} className="text-gray-300" />

        <div className="messages"></div>
        <div className="tasks flex flex-row justify-between text-gray-300">
          <button className="task-button rounded-full border border-gray-300">
            Task
          </button>
          <button className="task-button rounded-full border border-gray-300">
            Task
          </button>
          <button className="task-button rounded-full border border-gray-300">
            Task
          </button>
          <button className="task-button rounded-full border border-gray-300">
            Task
          </button>
        </div>
        <div className="send-message w-full rounded-lg border border-gray-300 flex flex-row justify-between items-center text-gray-300">
          <PlusIcon size={50} className="text-gray-300" />
          <input
            type="text"
            className="block w-full"
            placeholder="What's on your mind?"
          />
        </div>
      </div>
    </main>
  );
}
