import { SearchIcon, PlusIcon, SendMessageIcon, ChevronRightIcon } from "./ui/Icons";
import Sidenav from "./ui/Sidenav";

export default function Home() {
  return (
    <main className="flex flex-row relative mx-auto mt-auto mb-0 center justify-between rounded-lg border border-gray-300">
      <Sidenav />
      <SearchIcon size={30} className="search-icon text-gray-300" />
      <div className="content flex flex-col shrink">

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
          <PlusIcon size={30} className="text-gray-300" />
          <input
            type="text"
            className="block w-full"
            placeholder="What's on your mind?"
          />
          <SendMessageIcon size={40} className="text-gray-300" />
        </div>
      </div>
    </main>
  );
}
