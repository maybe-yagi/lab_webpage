import { ActivityProps } from "@/types/Activity.types";
import ActivitiesCard from "../../elements/ActivityCard/ActivitiesCard";
import { title } from "process";
import MyButton from "../../elements/Button/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cardVariants } from "../../common/Animation";

const Activity:React.FC<ActivityProps> = ({activityRef}:ActivityProps) => {
  const kusyami = {
    src: "/images/research_images/car.jpg",
    title: "くしゃみとまらん",
    description: "くしゃみとまらん助けてくれ",
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
    <motion.div id="activity" className="flex w-5/12 flex-col gap-2" ref={activityRef}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        <div className="text-2xl w-fit border-b-2 border-fuchsia-400 mb-4">
          <h2>Other Activities</h2>
        </div>
        <div>
          <ActivitiesCard ActivityCard_left={kusyami} ActivityCard_right={startUp}/>
        </div>
        <div className="flex justify-center mt-4">
          <MyButton onClick={handleClick}>view more</MyButton>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Activity;