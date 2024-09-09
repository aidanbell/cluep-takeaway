import { getAllMessages } from "../lib/actions";

export default async function Messages() {
  const messages = await getAllMessages();
  console.log("MESSAGES COMPONENT", messages);
  return (
    <div className="messages w-full flex flex-col flex-grow items-end justify-end">
      {messages?.map((message) => (
        <>
          <div className="message flex items-baseline justify-start">
            <div className="bg-gray-300 p-4 my-6 rounded-lg flex-1">
              {message.message}
            </div>
            <div className="w-3 overflow-hidden">
              <div className="h-4 bg-gray-300 -rotate-45 transform origin-bottom-left rounded-sm"></div>
            </div>
          </div>
        </>
      ))}
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
  );
}
