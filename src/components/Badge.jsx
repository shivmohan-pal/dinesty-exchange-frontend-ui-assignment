import Image from "next/image";
import starSvg from "../../public/star.svg";
import Circle from "./Circle";


const Badge = ({count,size}) => {

    // const w = size ? `w-[${size}]` : 'w-12';
    // const h = size ? `h-[${size}]` : 'h-12'

    return (
      <div className={`relative w-14 h-14`}>
        <Image 
          className="absolute inset-0 z-0"
         src={starSvg}
         alt="badge star" />
        <Circle className={"flex justify-center items-center absolute inset-[17%] bg-[var(--mud-600)] z-[1]"} >
        <span className="text-white text-sm font-bold">{count}</span>
        </Circle>
      </div>
    );
}

export default Badge;