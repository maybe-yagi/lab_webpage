import { ResearchProps } from "@/types/Research.types";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import ResearchCard from "@/app/components/elements/ResearchCard/ResearchCard";

const Research:React.FC<ResearchProps> = ({researchRef}: ResearchProps) => {
  return (
    <div id="research" className="flex w-5/12 flex-col gap-2" ref={researchRef}>
      <div className="text-2xl w-fit border-b-2">
        <h2>Research</h2>
      </div>
      <div>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper h-80" autoplay={{delay: 10000}}>
        <SwiperSlide>
          <ResearchCard src="/images/research_images/car.jpg" title={"画像認識"} description={"車両の画像認識を行い、交通網の整備を行っています。"} />
        </SwiperSlide>
        <SwiperSlide>
          <ResearchCard src="/images/research_images/car.jpg" title={"画像認識"} description={"車両の画像認識を行い、交通網の整備を行っています。"} />
        </SwiperSlide>
        <SwiperSlide>
          <ResearchCard src="/images/research_images/car.jpg" title={"画像認識"} description={"車両の画像認識を行い、交通網の整備を行っています。"} />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Research;