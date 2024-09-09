import { TaskButton } from "./ui/Buttons";
import MessageInput from "./ui/MessageInput";
import SearchBar from "./ui/SearchBar";
import Sidenav from "./ui/Sidenav";
import Messages from "./ui/Messages";
import { revalidatePath } from "next/cache";
import MessageWrapper from "./ui/MessageWrapper";


export default async function Home() {
  // const handleSearch = async (searchQuery: string): Promise<void> => {
  //   "use server";
  //   console.log("Search Query:", searchQuery);
  //   // You can add logic here to revalidate, refetch or filter messages based on the search query
  //   revalidatePath(`/messages?search=${searchQuery}`); // Revalidate path or handle search
  // };

  return (
    <main className="flex flex-row relative mx-auto mt-auto mb-0 center justify-between rounded-lg border overflow-hidden border-gray-300">
      <Sidenav />
      <div className="content flex flex-col transition-all duration-300 overflow-hidden">
        <SearchBar />
        <Messages />


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
