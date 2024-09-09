"use server";
import { getMessages } from "../lib/actions";

export default async function Messages({query}: {query: string}) {
  const messages = await getMessages(query);
  
  return (
    <div className="messages w-full flex flex-col-reverse items-end mb-3 overflow-y-scroll">
      {messages?.map((message, idx) => (
        <>
          <div
            className={`message flex items-baseline justify-start ${
              idx !== 0 ? "mr-3" : ""
            }`}>
            <div className="bg-blue-300 p-4 my-0.5 rounded-lg flex-1">
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const query = (context.query.search as string) || "";
//   const messages = await getMessages(query);
//   console.log(messages);
//   return {
//     props: {
//       messages,
//     },
//   };
// };