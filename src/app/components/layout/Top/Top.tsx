import { TopProps } from "@/types/Top.types";

const Top: React.FC<TopProps> = ({ topRef }: TopProps) => {
  return (
    <div id="top" className="flex items-center w-5/12" ref={topRef}>
      {/* 可視化されるカード部分 */}
      <div className="my-10 text-fuchsia-400 text-2xl md:text-5xl">
        <h2 className="text-2xl">National Insutitute Technology(KOSEN), Numazu College</h2>
        <h1>沼津高専　鄭研究室</h1>
        <h2 className="text-2xl">Jeong Lab</h2>
      </div>
    </div>
  )
}

export default Top;