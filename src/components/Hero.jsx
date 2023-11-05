import Image from "next/image";
import Circle from "./Circle";
import leafSvg from "../../public/leaf.svg";
import AppleAppStoreButton from "./svg/AppleAppStoreButton";
import Rating from "./Rating";
import mobileSvg from "../../public/mobile.svg";
import blueGhost from "../../public/blue-ghost.png";
import ghost from "../../public/ghost.png";
import redGhost from "../../public/red-ghost.png";

const Hero = () => {
  return (
    <div className="sm:px-4 py-7 flex w-full h-[var(--full-page-height-sm)] sm:h-[var(--full-page-height)]">
      <div className="relative flex items-center p-5 sm:p-10 flex-auto bg-[var(--purple-100)] rounded-3xl overflow-hidden">
        <Image
          className="absolute -top-10 left-16 rotate-90 "
          src={leafSvg}
          alt="leaf"
        />
        <Circle className={"absolute -top-4 left-3/4 w-12 h-12 bg-red-200 "} />
        <div className="absolute left-1/3 top-12 rotate-45">
          <Circle className={"w-7 h-7 bg-red-200 mb-3 ml-4"} />
          <Image
            className="rotate-[110deg] -ml-7 mt-4"
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
        <Circle
          className={"absolute -left-5 bottom-1/3 w-12 h-12 bg-red-200 "}
        />
        <Circle
          className={"absolute -bottom-[20px] left-1/3 w-12 h-12 bg-red-400"}
        />

        <div className="absolute h-[35rem] w-[35rem] left-1/2 -translate-x-1/3 sm:right-9 sm:left-auto sm:translate-x-0">
          <Circle
            className={"absolute flex inset-[18%] bg-[var(--purple-200)]"}
          >
            <Image className="" src={mobileSvg} alt="mobile" />
          </Circle>
          <Circle
            className={
              "relative rotate-[360deg] transition-transform duration-[2s] ease-in-out w-full h-full border-4 border-dashed border-white"
            }
          >
            <Image
              className="absolute left-9 top-9 -rotate-[30deg] w-[5rem]"
              src={blueGhost}
              alt="blue ghost"
            />
            <Image
              className="absolute -right-8 top-1/3 rotate-[30deg] w-[5rem]"
              src={redGhost}
              alt="red ghost"
            />
            <Image
              className="absolute left-20 -bottom-0 rotate-[15deg] w-[5rem]"
              src={ghost}
              alt="ghost"
            />
          </Circle>
        </div>

        <div className="relative w-auto backdrop-blur-sm sm:w-7/12">
          <span className="block text-lg font-light mb-3 px-1 sm:text-xl sm:font-normal">
            Ahead app
          </span>
          <h1 className="text-4xl font-bold mb sm:text-6xl">
            Master your life by mastering emotions
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center mt-8">
            <AppleAppStoreButton />
            <div className="inine-block w-max">
              <Rating rating={5} />
              <span className="block text-center text-slate-600 font-normal text-sm">
                100+ Appstore reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
