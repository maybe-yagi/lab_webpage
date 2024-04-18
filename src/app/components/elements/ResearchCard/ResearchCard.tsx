import { ResearchCardProps } from "@/types/Cards/ResearchCard.types";
import Image from "next/image";

const ResearchCard = ({src, title, description}: ResearchCardProps) => {
  return(
    <div className="flex justify-center relative w-full static">
      <div>
        <Image src={src} height={400} width={800} alt=""/>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        <div className="bg-black bg-opacity-60 p-3 rounded-lg absolute top-0 right-0">
          <h2 className="text-xl w-fit border-b-2">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
    
  )
}

export default ResearchCard;