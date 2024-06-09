import Image from "next/image";
import ghost from "../../public/ghost.png";
import withUsData from "@/helpers/data/withUsData";
import useObserver from "@/helpers/hooks/useObserver";

const WorkWithUs = () => {
  const {ref:myRef, inView} = useObserver({threshold:0.25}); 
  return (
    <div ref={myRef} className="sm:px-4 py-7 flex w-full h-[var(--full-page-height-sm)] max-lg:h-auto snap-end">
      <div className="flex items-start p-5 sm:p-10 flex-auto bg-[var(--purple-50)] rounded-3xl overflow-hidden">
        <div className="flex max-lg:flex-col flex-auto justify-center gap-4 lg:gap-8 overflow-hidden">
          <div className="flex flex-col gap-4 lg:gap-8">
            <h2 className={`font-semibold text-xl xs:text-2xl sm:text-3xl md:text-5xl ${inView? 'animate-slideLTR' :''} -translate-x-full scale-0 opacity-0`}>
              Work with us
            </h2>
            <div className="relative">
              <div className="flex flex-none w-full flex-col gap-2 xs:gap-4 max-xs:p-4 pb-8 sm:pb-10 p-5 sm:p-7 rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl shadow-xl bg-white">
                <Image className="w-8" src={ghost} alt="blue ghost" />
                <h3 className="font-semibold text-slate-700 max-xs:text-sm xs:text-base sm:text-2xl md:text-3xl">
                  About
                </h3>
                <p className="max-[300px]:text-xs max-sm:text-sm  sm:text-lg md:text-xl text-slate-600">
                  {`At ahead our goal is to make self-improvement fun and lasting.
                  We know there's is way how to make it work. And that's what ahead
                  is all about!`}
                </p>
              </div>
              <div className="relative -top-4 flex flex-none w-full flex-col gap-2 xs:gap-4 max-xs:p-4 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl bg-[var(--mud-50)]">
                <h3 className="font-semibold text-slate-700 max-xs:text-sm xs:text-base sm:text-2xl md:text-3xl">
                  Product
                </h3>
                <p className="max-[300px]:text-xs max-sm:text-sm  sm:text-lg md:text-xl text-slate-600">
                  {`Sure, you could spent ages reading books or sitting in seminars on how to become a better spouse, partner, or manager - like we did...`}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-8 lg:pl-12">
            <h2 className={`font-semibold text-[var(--purple-400)] text-right text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:pr-12 ${inView? 'animate-slideRTL' :''} translate-x-full scale-0 opacity-0`}>
              ahead
            </h2>
            <div className="workWithScroll flex lg:flex-col gap-4 sm:gap-6 lg:h-[var(--with-height)] lg:pr-12 max-lg:pb-5 overflow-auto">
              {withUsData && withUsData.length ? (
                withUsData.map((data, i) => (
                  <div
                    key={i}
                    className={`flex flex-none w-full sm:w-[25rem] flex-col gap-1 xs:gap-3 max-xs:p-4 p-4 sm:p-7 rounded-2xl bg-white`}
                  >
                    <h3 className="font-semibold max-xs:text-sm leading-none sm:text-lg">
                      {data.title}
                    </h3>
                    <p className="max-[300px]:text-xs text-base opacity-70">
                      {data.text}
                    </p>
                  </div>
                ))
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
