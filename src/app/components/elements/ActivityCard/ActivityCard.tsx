import { ActivityCardProps } from "@/types/Cards/ActivityCard.types";
import Image from "next/image";

const ActivityCard = ({src, title, description, pos_photo="upside"}: ActivityCardProps) => {
  return(
    <div className="flex justify-center relative w-full">
      {pos_photo == "upside" ? (
        <>
          <div>
            <Image src={src} height={350} width={350} alt=""/>
          </div>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div>
            <Image src={src} height={350} width={350} alt=""/>
          </div>
        </>
      )}
    </div>
  )
}

export default ActivityCard;