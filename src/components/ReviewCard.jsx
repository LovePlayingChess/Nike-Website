import {star} from "../assets/icons";

const ReviewCard = ( {imgURL, customerName, rating, feedback} ) => {
  return (
    <div className = "flex justify-center items-center flex-col">
      <div>
        <img 
          src = {imgURL} 
          alt = "image" 
          className = "mt-5 rounded-full w-[120px] h-[120px]"/>
      </div>
      <p className = "m-auto max-w-sm mt-4 text-center info-text">{feedback}</p>
      <div className = 'mt-3 flex justify-center items-center gap-2.5'>
        <img 
          src = {star} 
          alt = "star"
          width = {24}
          height = {24}
        />
        <p className = "text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <p className = "text-3xl font-bold font-palanquin text-slate-gray">{customerName}</p>
    </div>
  )
}

export default ReviewCard;