import { AnchorProps } from "@/types/Anchor.types";

const Anchor: React.FC<AnchorProps> = ({
  topRef,
  outlineRef,
  profileRef,
  researchRef,
  activityRef,
  inquireRef,
}: AnchorProps) => {
  return (
    <div>
      <div className="fixed left-10 -z-10 my-40 flex flex-col gap-10 text-2xl font-thin text-gray-200 lg:z-10">
        <a href="#top" className="flex item-center">
          <span>top</span>
        </a>
        <a href="#outline" className="flex item-center">
          <span>outline</span>
        </a>
        <a href="#profile" className="flex item-center">
          <span>profile</span>
        </a>
        <a href="#research" className="flex item-center">
          <span>research</span>
        </a>
        <a href="#activity" className="flex item-center">
          <span>activity</span>
        </a>
        <a href="#inquire" className="flex item-center">
          <span>inquire</span>
        </a>
      </div>
    </div>
  )
}

export default Anchor;