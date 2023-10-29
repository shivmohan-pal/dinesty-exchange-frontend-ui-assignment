import { StarRounded } from "@mui/icons-material";


const Rating =({rating})=>{
    const Rating = rating;
    return (
        <div className="flex gap-1 ">
            {[1,2,3,4,5].map((el)=>{
                if(Rating>=el)return <StarRounded key={el} style={{color: "var(--golden-300)"}} />;
                return <StarRounded key={el} style={{color: "var(--gray)"}}/>;
            })}
        </div>
    );
}

export default Rating;