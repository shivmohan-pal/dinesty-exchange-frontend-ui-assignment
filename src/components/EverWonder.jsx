import thinkerData from "@/helpers/data/thinkersData";
import Badge from "./Badge";
import Circle from "./Circle";
import DotChain from "./DotChain";
import useObserver from "@/helpers/hooks/useObserver";

const EverWonder = () => {
  const {ref:myRef, inView} = useObserver({threshold:0.35});

  return (
    <div ref={myRef} className="sm:px-4 py-7 flex w-full h-[var(--full-page-height-sm)] sm:h-[var(--full-page-height)] snap-end">
      <div className="flex flex-auto items-center justify-center p-5 sm:p-10 bg-[var(--blue-100)] rounded-3xl overflow-hidden">
        <div className="flex flex-col max-sm:gap-5 gap-10">
          <div className="">
            <span className="block text-sm xs:text-center font-light opacity-90 mb-3 px-1 sm:text-xl sm:font-normal">
              Let your family, friends, co-worker (anonymously) rate you social
              skills.
            </span>
            <h2 className="font-semibold xs:text-center text-xl xs:text-2xl sm:text-3xl md:text-5xl">
              Ever wondered what others think of you?
            </h2>
          </div>

          <div className="relative flex max-sm:flex-col max-sm:gap-3 justify-between items-start">
            <div className="relative flex sm:flex-col items-center gap-2 w-full sm:text-center justify-self-center">
              <div className="dashed-line absolute w-1/2 right-0 sm:h-1 sm:top-6"></div>
              <Badge
                className={`max-sm:w-10 max-sm:h-10 flex-none ${inView? 'animate-jumpyScale': ''} opacity-0 scale-0`}
                count={1}
              />
              <p className={`sm:px-2 text-xs xs:text-sm max-sm:font-light sm:text-base ${inView? 'animate-jumpyScale': ''} opacity-0 scale-0`}>
                Answer question on your social skills
              </p>
            </div>
            <div className="relative flex sm:flex-col items-center gap-2 w-full sm:text-center justify-self-center">
              <div className="dashed-line absolute w-full sm:h-1 sm:top-6"></div>
              <Badge
                className={`max-sm:w-10 max-sm:h-10 flex-none ${inView? 'animate-jumpyScale': ''} opacity-0 scale-0`}
                count={2}
              />
              <p className={`sm:px-2 text-xs xs:text-sm max-sm:font-light sm:text-base ${inView? 'animate-jumpyScale': ''} opacity-0 scale-0`}>
                Let others anonymously answer the same questions about you
              </p>
            </div>
            <div className="relative flex sm:flex-col items-center gap-2 w-full sm:text-center justify-self-center">
              <div className="dashed-line absolute w-1/2 left-0 sm:h-1 sm:top-6"></div>
              <Badge
                className={`max-sm:w-10 max-sm:h-10 flex-none ${inView? 'animate-jumpyScale': ''} opacity-0 scale-0`}
                count={3}
              />
              <p className={`sm:px-2 text-xs xs:text-sm max-sm:font-light sm:text-base ${inView? 'animate-jumpyScale': ''} opacity-0 scale-0`}>
                Find out where you and others see things same way - and where
                not!
              </p>
            </div>
          </div>

          <div className="flex justify-center">
             <DotChain data = {thinkerData} inView={inView}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverWonder;
