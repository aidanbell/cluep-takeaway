import { getAllMessages } from "../lib/actions";

export default async function Messages() {
  const messages = await getAllMessages();
  
  return (
    <div className="messages w-full flex flex-col flex-grow items-end justify-end">
      {messages?.map((message, idx) => (
        <>
          <div className="message flex items-baseline justify-start">
            <div className="bg-blue-300 p-4 my-6 rounded-lg flex-1">
              {message.message}
            </div>
            {idx === 0 && (
              <div className="w-3 overflow-hidden">
              <div className="h-4 bg-blue-300 -rotate-45 transform origin-bottom-left rounded-sm"></div>
            </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
