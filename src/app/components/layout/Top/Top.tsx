import { TopProps } from "@/types/Top.types";

const Top: React.FC<TopProps> = ({ topRef }: TopProps) => {
  return (
    <div id="top" className="flex" ref={topRef}>
      {/* 可視化されるカード部分 */}
      <div className="mb-10 bg-opacity-70 p-5 md:p-10">
        <h2>National Insutitute Technology(KOSEN), Numazu College</h2>
        <h1>Jyoung Lab</h1>
      </div>
    </div>
  )
}

export default Top;