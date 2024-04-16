import ActivityCard from "./ActivityCard";
import { ActivitiesCardProps } from "@/types/Cards/ActivitiesCard.types";

const ActivitiesCard = ({ ActivityCard_left, ActivityCard_right }:ActivitiesCardProps) => {
  return (
    <div className="relative w-full max-w-4xl h-96 p-8">
      <div className="absolute top-0 left-0 bg-white shadow-lg rounded-lg w-11/12 h-1/2 items-center">
        <ActivityCard {...ActivityCard_left}/>
      </div>
      <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-lg w-11/12 h-1/2">
        <ActivityCard {...ActivityCard_right}/>
      </div>
    </div>
  )
}

export default ActivitiesCard;