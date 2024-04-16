import { ActivityCardProps } from "@/types/Cards/ActivityCard.types";
import Image from "next/image";

const ActivityCard = ({src, title, description, pos_photo="upside"}: ActivityCardProps) => {
  return(
    <div className="flex items-center justify-center relative w-full h-full">
      {pos_photo == "upside" ? (
        <>
          <div className="mx-3 flex-1">
            <Image src={src} width={350} height={350} alt=""/>
          </div>
          <div className="flex-1">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </>
      ) : (
          <>
            <div className="mx-3 flex-1">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="flex-1">
              <Image src={src} height={350} width={350} alt=""/>
            </div>
          </>
      )}
    </div>
  )
}

export default ActivityCard;