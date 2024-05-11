import { ActivityProps } from "@/types/Activity.types";
import ActivitiesCard from "../../elements/ActivityCard/ActivitiesCard";
import { title } from "process";
import MyButton from "../../elements/Button/Button";
import { useRouter } from "next/navigation";

const Activity:React.FC<ActivityProps> = ({activityRef}:ActivityProps) => {
  const left_card = {
    src: "/images/research_images/car.jpg",
    title: "a",
    description: "a",
  }

  const startUp = {
    src: "/images/research_images/car.jpg",
    title: "スタートアップの支援",
    description: "スタートアップの支援を行っています。",
  }

  const router = useRouter();

  const handleClick = () => {
    router.push('/Activity');
  }

  return (
    <div id="activity" className="flex w-5/12 flex-col gap-2" ref={activityRef}>
      <div className="card">
        <div className="text-2xl w-fit border-b-2 border-fuchsia-400 mb-4">
          <h2>Other Activities</h2>
        </div>
        <div>
          <ActivitiesCard ActivityCard_left={left_card} ActivityCard_right={startUp}/>
        </div>
        <div className="flex justify-center mt-4">
          <MyButton onClick={handleClick}>view more</MyButton>
        </div>
      </div>
    </div>
  )
}

export default Activity;