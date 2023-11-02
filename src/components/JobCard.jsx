const JobCard = ({data}) => {
  return (
    <div className="flex flex-none w-full group sm:w-[25rem] flex-col gap-1 xs:gap-3 max-xs:p-4 p-4 sm:p-5 md:p-7 rounded-2xl sm:rounded-3xl transition-all duration-700 bg-[var(--mud-100)] hover:bg-[var(--mud-300)]">
      <h3 className="text-xl font-medium">{data.designation}</h3>
      <ul className="">
        {data.details.map((el, i) => (
          <li key={i} className="flex gap-2 items-center text-sm mb-1  last:mb-auto">
            <span className="text-2xl font-extrabold">&#x2022;</span>
            {el}
          </li>
        ))}
      </ul>
      <button className="flex w-0 h-0 group-hover:w-auto group-hover:h-auto scale-0 group-hover:scale-100 ease-out  group-hover:px-4 group-hover:py-3 bg-black text-white text-sm rounded-3xl border-black border-x border-y transition-all duration-700 active:transition-none active:opacity-40 overflow-hidden"><a href={data.full_page_link} className="flex-auto">See details</a></button>
    </div>
  );
};

export default JobCard;