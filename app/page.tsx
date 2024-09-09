import { TaskButton } from "./ui/Buttons";
import MessageInput from "./ui/MessageInput";
import SearchBar from "./ui/SearchBar";
import Sidenav from "./ui/Sidenav";
import Messages from "./ui/Messages";

export default async function Home({ searchParams }: { searchParams: { search: string } }) {
  return (
    <main className="flex flex-row relative mx-auto mt-auto mb-0 center justify-between rounded-lg border overflow-hidden border-gray-300">
      <Sidenav />
      <div className="content flex flex-col transition-all duration-300 overflow-hidden">
        <SearchBar />
        <Messages query={searchParams?.search || ""} />

        <div className="tasks w-full flex flex-row flex-grow justify-between text-gray-300">
          <TaskButton text="Task" />
          <TaskButton text="Task" />
          <TaskButton text="Task" />
          <TaskButton text="Task" />
        </div>
        <MessageInput />
      </div>
    </main>
  );
}
