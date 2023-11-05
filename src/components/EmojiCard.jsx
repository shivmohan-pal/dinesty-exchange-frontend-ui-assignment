import Emoji from "./Emoji";


const EmojiCard = ({ bgColor, emojiCode, emojiName, title, text }) => {
    
    return (
        <div className={`flex flex-none w-full sm:w-[25rem] flex-col gap-1 xs:gap-3 max-xs:p-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl hover:-rotate-6 hover:text-white transition-all duration-700 hover:!bg-[var(--purple-400)]`}
            style={{backgroundColor : bgColor}}  
              >
            <Emoji symbol={emojiCode} css={"text-2xl sm:text-4xl md:text-5xl"} label={emojiName} />
            <h4 className="font-semibold max-xs:text-sm sm:text-lg">{title}</h4>
            <p className="max-[300px]:text-xs max-sm:text-sm opacity-60 sm:text-lg ">{text}</p>
        </div>
    );
}

export default EmojiCard;