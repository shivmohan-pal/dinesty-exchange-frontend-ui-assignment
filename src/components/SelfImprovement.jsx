import Image from "next/image";
import blueGhost from "../../public/blue-ghost.png";
import useObserver from "@/helpers/hooks/useObserver";
import DotLineList from "./DotLineList";
import improveData from "@/helpers/data/improveData";

const SelfImprovement = () => {
  // const {ref:improve,inView:improveInview } = useObserver({threshold:0.75});
  // console.log(improveInview);
  return (
    <div
      // ref={improve}
      className="sm:px-4 xs:py-3 sm:py-7 flex flex-col justify-around w-full h-[var(--full-page-height-sm)] sm:h-[var(--full-page-height)]"
    >
      <div className="flex flex-col gap-3 sm:gap-6 p-3 xs:p-4 md:px-10 md:py-5">
        <div>
          <span className="block text-sm font-light opacity-90 px-1 sm:text-xl sm:font-normal">
            Wrong with self-improvement & how we{"'"}re fixing it.
          </span>
          <div className="flex items-center overflow-hidden">
            <h3 className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-5xl">
              Self-improvement. Ugh.
            </h3>
            <Image className="w-12 sm:w-auto" src={blueGhost} alt="red ghost" />
          </div>
        </div>
        <div className="flex h-[50svh] md:w-9/12 justify-center m-auto p-3 overflow-auto no-scrollbar shadow-inner">
          <DotLineList>
            {improveData && improveData.length ? (
              improveData.map((data, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 mb-12 -mt-2 p-3 pt-0"
                >
                  <h3 className="font-medium text-slate-800 break-words sm:[word-spacing:2px] text-xl">
                    {data.title}
                  </h3>
                  <p className=" font-normal text-slate-800">
                    {data.paragraph}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center">Sorry, But Something Went Wrong</div>
            )}
          </DotLineList>
        </div>
      </div>
    </div>
  );
};

export default SelfImprovement;