import cardData from "@/helpers/data/cardData";

import Image from "next/image";
import redGhost from "../../public/red-ghost.png";
import EmojiCard from "./EmojiCard";

export const SoundFamiliar = () => {
  return (
    <div className="sm:px-4 xs:py-3 sm:py-7 flex flex-col justify-around w-full h-[var(--full-page-height-sm)] sm:h-[var(--full-page-height)]">
      <div className="flex flex-col gap-2 xs:gap-3 sm:gap-5 p-3 xs:p-4 md:px-10 md:py-5 md:flex-row">
        <h2 className="font-medium text-slate-900 text-xl  xs:text-2xl sm:text-3xl md:text-4xl md:w-1/3">
          EQ beats IQ
        </h2>
        <p className="text-base xs:text-lg sm:text-xl text-zinc-600 md:text-2xl md:w-1/3 md:3xl">
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </p>
        <p className="text-base xs:text-lg sm:text-xl text-zinc-600 md:text-2xl md:w-1/3 md:3xl">
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-around xs:gap-3 sm:gap-5 p-3 xs:px-4 md:px-10 md:py-5">
        <div className="flex items-end overflow-hidden">
          <h3 className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-5xl">
            Does this sound familiar...
          </h3>
          <Image className="w-12 sm:w-auto" src={redGhost} alt="red ghost" />
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-6 items-center overflow-x-auto no-scrollbar">
          {cardData.map((data, i) => {
            const { bgColor, emoji, text, title } = data;
            return (
              <EmojiCard
                key={i}
                bgColor={bgColor}
                emojiCode={emoji.code}
                emojiName={emoji.name}
                title={title}
                text={text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SoundFamiliar;
