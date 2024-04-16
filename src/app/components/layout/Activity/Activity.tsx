import { ActivityProps } from "@/types/Activity.types";
import ActivityCard from "../../elements/ActivityCard/ActivityCard";

const Activity:React.FC<ActivityProps> = ({activityRef}:ActivityProps) => {
  return (
    <div id="activity" className="flex w-6/12 flex-col gap-2" ref={activityRef}>
      <div className="text-2xl w-fit border-b-2">
        <h2>Other Activities</h2>
      </div>
      <div className="relative w-full max-w-4xl h-96 bg-black p-8">
        <ActivityCard src={"/images/research_images/car.jpg"} title={""} description={""}/>
        <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-lg p-6 w-1/3">
          <h2 className="text-lg font-bold">Card 2</h2>
          <p>This is the second card. It appears in the bottom right corner and overlaps with the first card.</p>
        </div>
      </div>
    </div>
  )
}

export default Activity;