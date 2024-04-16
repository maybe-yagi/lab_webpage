import ActivityCard from "./ActivityCard";
import { ActivitiesCardProps } from "@/types/Cards/ActivitiesCard.types";

const ActivitiesCard = ({ ActivityCard_left, ActivityCard_right }:ActivitiesCardProps) => {
  return (
    <div className="relative w-full max-w-4xl h-96 bg-black p-8">
      <div className="absolute top-0 left-0 bg-white shadow-lg rounded-lg p-6 w-1/3">
        <ActivityCard {...ActivityCard_left}/>
      </div>
      <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-lg p-6 w-1/3">
        <ActivityCard {...ActivityCard_right}/>
      </div>
    </div>
  )
}

export default ActivitiesCard;