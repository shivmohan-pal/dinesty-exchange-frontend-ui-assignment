import useObserver from "@/helpers/hooks/useObserver";
import Signature from "./svg/Signature";

const BeforeStarted = () => {
  const {ref:myRef ,inView } = useObserver({threshold:0.5});
  return (
    <div
    ref={myRef} 
    className="sm:px-4 xs:py-3 sm:py-7 flex flex-col justify-around w-full h-[var(--full-page-height-sm)] sm:h-[var(--full-page-height)]">
      <div className="flex flex-col m-auto text-center gap-3 lg:w-3/4 xl:w-1/2 sm:gap-6 p-3 xs:p-4 md:px-10 md:py-5">
        <div>
          <span className="block text-sm font-light opacity-90 mb-3 px-1 sm:text-xl sm:font-normal">
            We take privacy seriously
          </span>
          <h2 className="font-semibold text-lg xs:text-xl sm:text-2xl [word-spacing:4px] md:text-4xl">
            Before you get started
          </h2>
        </div>
        <p className="text-base xs:text-lg sm:text-xl text-zinc-600 md:text-2xl md:3xl">
          {`"We wan't share your answer with anyone (and won't ever tell you which friends said what about you)"`}
        </p>
        <p className="sm:text-xl">
          <span className="inline-block align-bottom">with love,</span>
          <span className="inline-block align-bottom">
            <Signature pathClass={`${inView?'animate-sign':''}`}/>
          </span>
        </p>
        <div>
          <button className="px-5 py-3 bg-black text-white text-base font-medium rounded-3xl border-black border-x border-y hover:bg-white hover:text-black transition-all duration-700 active:transition-none active:opacity-40">
            Start a test
          </button>
          <p className="mt-3 text-slate-600">Take only 5 minutes</p>
        </div>
      </div>
    </div>
  );
};
export default BeforeStarted;
