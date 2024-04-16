import { ActivityProps } from "@/types/Cards/ActivityCard.types";
import Image from "next/image";

const ActivityCard = ({src, title, description, pos="left", pos_y="top"}: ActivityProps) => {
  return(
    <div className="flex justify-center relative w-fullc">
      <div>
        <Image src={src} height={350} width={350}/>
      </div>
      <div>

      </div>
    </div>
    
  )
}

export default ActivityCard;