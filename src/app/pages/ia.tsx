import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function Ia() {
  return (
    <div className="h-screen bg-linear flex items-center justify-center">
      <div className="flex flex-col items-center gap-10 w-min">
        <div className="bg-dark-gray md:w-[750px] sm:w-[450px] w-[300px] h-[500px] rounded-xl"></div>
        <div className="flex flex-row gap-10 w-full">
          <input
            className=" bg-dark-gray rounded-xl px-6 w-full focus:outline-none text-white"
            placeholder="Rentrez votre question"
          ></input>
          <button className="bg-dark-gray p-6 rounded-xl text-white">
            <PaperAirplaneIcon className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
