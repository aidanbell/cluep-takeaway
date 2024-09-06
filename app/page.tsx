import { TaskButton } from "./ui/Buttons";
import { SearchIcon, PlusIcon, SendMessageIcon, ChevronRightIcon } from "./ui/Icons";
import MessageInput from "./ui/MessageInput";
import Sidenav from "./ui/Sidenav";

export default function Home() {
  return (
    <main className="flex flex-row relative mx-auto mt-auto mb-0 center justify-between rounded-lg border overflow-hidden border-gray-300">
      <Sidenav />
      <div className="content flex flex-col transition-all duration-300 overflow-hidden">
        <SearchIcon size={30} className="text-gray-300 hover:text-black" />
        <div className="messages w-full flex flex-grow items-end justify-end">
          <div className="message flex items-baseline justify-end">
            <div className="bg-blue-400 p-4 my-6 rounded-lg flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum!
            </div>
            <div className="w-3 overflow-hidden">
              <div className="h-4 bg-blue-400 -rotate-45 transform origin-bottom-left rounded-sm"></div>
            </div>
          </div>
        </div>

        <div className="tasks w-full flex flex-row flex-grow justify-between text-gray-300">
          <TaskButton text="Task" />
          <TaskButton text="Task" />
          <TaskButton text="Task" />
          <TaskButton text="Task" />
        </div>
        <MessageInput />
        {/* <div className="send-message w-full rounded-full border border-gray-300 flex flex-row flex-grow-0 justify-between items-center text-gray-300">
          <PlusIcon size={32} className="text-gray-300 hover:text-black" />
          <div contentEditable className="block w-full resize-none">
            What's on your mind?
          </div>
          <textarea
            rows={1}
            className="block w-full resize-none"
            placeholder="What's on your mind?"
          />
          <SendMessageIcon
            size={40}
            className="text-gray-300 hover:text-black"
          />
        </div> */}
      </div>
    </main>
  );
}
