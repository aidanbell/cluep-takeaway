export default function TaskButton({text}: {text: string}) {
  return (
    <button className="task-button rounded-full border border-gray-300 hover:border-black hover:text-black transition-all ease-in-out hover:transform hover:-translate-y-2">
      {text}
    </button>
  );
}