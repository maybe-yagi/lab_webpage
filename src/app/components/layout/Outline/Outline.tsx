import { OutlineProps } from "@/types/Outline.types";

const Outline:React.FC<OutlineProps> = ({outlineRef}:OutlineProps) => {
	return (
		<div id="outline" className="flex w-6/12" ref={outlineRef}>
			{/* 研究室紹介のカード */}
			<div className="w-3/5 ">
				<h2 className="text-2xl w-fit border-b-2">About</h2>
			</div>
		</div>
	)
}

export default Outline;