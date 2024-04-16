import { ActivityProps } from "@/types/Activity.types";
import ActivitiesCard from "../../elements/ActivityCard/ActivitiesCard";

const Activity:React.FC<ActivityProps> = ({activityRef}:ActivityProps) => {
  const left_card = {
    src: "/images/research_images/car.jpg",
    title: "a",
    description: "a",
  }
  return (
    <div id="activity" className="flex w-6/12 flex-col gap-2" ref={activityRef}>
      <div className="text-2xl w-fit border-b-2">
        <h2>Other Activities</h2>
      </div>
      <div>
        <ActivitiesCard ActivityCard_left={left_card} ActivityCard_right={left_card}/>
      </div>
    </div>
  )
}

export default Activity;