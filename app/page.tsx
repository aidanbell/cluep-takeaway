import { SearchIcon, PlusIcon, SendMessageIcon, ChevronRightIcon } from "./ui/Icons";
import Sidenav from "./ui/Sidenav";

export default function Home() {
  return (
    <main className="flex flex-row relative mx-auto mt-auto mb-0 center justify-between rounded-lg border border-gray-300">
      <Sidenav />
      <SearchIcon size={30} className="text-gray-300 hover:text-black" />
      <div className="content flex flex-col shrink">

        <div className="messages flex items-end justify-end">
          <div className="message flex items-baseline justify-end">
            <div className="bg-blue-400 p-4 my-6 rounded-lg flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum!
            </div>
            <div className="w-3 overflow-hidden">
              <div className="h-4 bg-blue-400 -rotate-45 transform origin-bottom-left rounded-sm"></div>
            </div>
          </div>
        </div>

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
        <div className="send-message w-full rounded-full border border-gray-300 flex flex-row justify-between items-center text-gray-300">
          <PlusIcon size={32} className="text-gray-300 hover:text-black" />
          <input
            type="text"
            className="block w-full"
            placeholder="What's on your mind?"
          />
          <SendMessageIcon size={40} className="text-gray-300 hover:text-black" />
        </div>
      </div>
    </main>
  );
}
