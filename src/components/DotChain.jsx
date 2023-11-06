import Circle from "./Circle";

const DotChain = ({ data, inView }) => {
  return (
    <div
      className={`relative flex flex-wrap max-sm:p-8 p-16 bg-white rounded-3xl shadow-lg`}
    >
      {data && data.length ? (
        data.map((data, i) => {
          const css = {
            bg: `bg-[${data.bgColor}]`,
            duration: `duration-[${i * 300}ms]`,
            delay: `delay-[${i * 1000}ms]`,
          };
          return (
            <div key={i} className="relative sm:text-center group">
              <div className="relative top-1/2 -translate-y-1/2">
                <div className="absolute bg-slate-300 group-first:w-1/2 group-last:w-1/2 group-first:right-0 group-last:left-0 w-full h-[2px] top-1/2 -translate-y-1/2"></div>
                <Circle
                  className={`relative left-1/2 -translate-x-1/2 max-sm:w-3 max-sm:h-3 w-5 h-5 transition-all duration-1000 ${
                    inView ? "" : "opacity-0 scale-0 translate-x-20"
                  } ${css.delay}`}
                  style={{ backgroundColor: data.bgColor }}
                />
              </div>
              <span
                className={`relative inline-block p-2 right-0 sm:group-even:top-2/3 sm:-top-full sm:left-1/2 sm:group-first:-left-full sm:group-first:translate-x-1/2 sm:px-4 text-white text-xs max-sm:font-light sm:text-base rounded-lg transition-all duration-1000 ${
                  inView ? "" : "opacity-0 scale-0 translate-x-20"
                } ${css.delay}`}
                style={{ backgroundColor: data.bgColor }}
              >
                {data.name}
              </span>
            </div>
          );
        })
      ) : (
        <div> sorry , something went wrong</div>
      )}
    </div>
  );
};

export default DotChain;
