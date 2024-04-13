import { AnchorProps } from "@/types/Anchor.types";

const Anchor: React.FC<AnchorProps> = ({
  topRef,
  outlineRef,
  profileRef
}: AnchorProps) => {
  return (
    <div>
      <div className="fixed left-10 -z-10 my-10 flex flex-col gap-10 text-2xl font-thin text-gray-200 lg:z-10">
        <a href="#top" className="flex item-center">
          <span className="">top</span>
        </a>
        <a href="#outline" className="flex item-center">
          <span className="">outline</span>
        </a>
      </div>
    </div>
  )
}

export default Anchor;