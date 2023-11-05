import Circle from "./Circle";

const DotLineList = ({ children }) => {
  const childs = !Array.isArray(children) ? [children] : [...children];
  return (
    <div className="flex relative flex-col">
      {childs.length &&
        childs.map((child, i) => (
          <div key={i} className="relative flex gap-3 items-start group">
            <div className="overlay absolute bg-white -top-1 right-0 bottom-1 -left-2 opacity-60 z-[1] group-hover:bg-transparent transition-all duration-200 ease-linear"></div>
            
            <div>
              <div className="absolute w-[2px] h-full rounded-4x group-last:bg-transparent bg-[var(--purple-400)] z-[-1]"></div>
              <Circle
                className={
                  "absolute w-[10px] h-[10px] left-[1px] -translate-x-1/2 group-hover:scale-[1.35] group-hover:border-4 border-[var(--purple-100)] box-content bg-[var(--purple-400)] transition-all duration-100 ease-linear z-0"
                }
              />
            </div>
            {child}
          </div>
        ))}
    </div>
  );
};

export default DotLineList;
