import Image from "next/image";
import leafSvg from "../../public/leaf.svg";
import Circle from "./Circle";
import Badge from "./Badge";
import ghost from "../../public/ghost.png";
import useObserver from "@/helpers/hooks/useObserver";

const MeetApp = () => {
  const {ref:myRef, inView} = useObserver({threshold:0.25}); 

  return (
    <div ref={myRef} id="meet-app" className="meet-app relative sm:px-4 py-7 flex w-full h-[var(--full-page-height-sm)] sm:h-[var(--full-page-height)]">
      <div className="relative flex items-center justify-center p-5 sm:p-10 flex-auto bg-[var(--mud-50)] rounded-3xl overflow-hidden">
        <Image
          className="absolute rotate-6 left-[65%] top-20 animate-spin-reverse"
          src={leafSvg}
          alt="leaf"
        />

        <Circle
          className={
            "absolute bg-[var(--mud-200)] left-0 -translate-x-1/3 bottom-4 w-[18rem] h-[18rem]"
          }
        />

        <div className="relative flex flex-col gap-5 xs:gap-10 w-auto backdrop-blur-sm">
          <div className={`${inView? 'animate-slideLTR' :''} -translate-x-full scale-0 opacity-0`}>
            <span className="block text-sm font-light opacity-90 mb-3 px-1 sm:text-xl sm:font-normal">
              Built out of frustration
            </span>
            <h2 className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-5xl">
              Meet the ahead app
            </h2>
          </div>
          <div className="flex justify-end">
            <div className="absolute flex justify-center left-0 w-full sm:w-5/12 ">
              <div className="absolute right-0 top-12 rotate-[30deg]">
                <Circle className={"w-7 h-7 bg-red-200 mb-3 ml-4"} />
                <Image
                  className="rotate-[110deg] animate-spin-reverse -ml-6 mt-3"
                  src={leafSvg}
                  alt="leaf"
                />
                <Circle
                  className={
                    "relative mt-4 w-12 h-12 bg-orange-200 backdrop-opacity-10"
                  }
                >
                  <Circle className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-400" />
                </Circle>
              </div>
              <div className="relative flex flex-col justify-center items-center">
                <Badge className={`animate-bounce`} count={1} />
                <Circle
                  className={
                    "flex justify-center items-center -mt-6 -ml-2 z-0 bg-white w-[12rem] h-[12rem] border-[12px] border-slate-100"
                  }
                >
                  <Image className="" src={ghost} alt="blue ghost" />
                </Circle>
              </div>
            </div>
            <div className={`flex flex-col gap-2 sm:gap-6 w-auto backdrop-blur-sm sm:w-7/12 z-[2] ${inView? 'animate-slideRTL' :''} translate-x-full scale-0 opacity-0`}>
              <p className=" leading-7 opacity-60 max-xs:text-base text-lg sm:text-xl">
                A personalized pocket coach that provides bite-sized
                science-driven tools to boost emotional intelligence.
              </p>
              <p className="leading-7 opacity-60 max-xs:text-base text-lg sm:text-xl">
                Think of it as a pocket cheerleader towards a better, more
                fulfilling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetApp;
