import vacancyData from "@/helpers/data/vacancyData";
import JobCard from "./JobCard";
import useObserver from "@/helpers/hooks/useObserver";

const OpenVacancies = () => {
  const {ref:myRef, inView} = useObserver({threshold:0.25}); 
  return (
    <div ref={myRef} id="vacancies" className="sm:px-4 xs:py-3 sm:py-7">
      <div className="flex flex-col gap-2 xs:gap-4 sm:gap-8 p-3 xs:p-4 md:px-10 md:py-5 overflow-hidden">
        <h2 className={`font-semibold text-xl xs:text-2xl sm:text-3xl md:text-5xl ${inView? 'animate-slideLTR' :''} -translate-x-full scale-0 opacity-0 transition-all duration-550`}>
          Open vacancies
        </h2>
        <div className="flex gap-2 sm:gap-4 md:gap-6 items-start overflow-x-auto no-scrollbar">
          {(vacancyData && vacancyData.length) ? vacancyData.map((data, i) => {
            return (
                <JobCard key={i} data = {data}/>
            );
          }) : <div className="text-center">Sorry, No Openings Right Now</div>
          }
        </div>
      </div>
    </div>
  );
};

export default OpenVacancies;
