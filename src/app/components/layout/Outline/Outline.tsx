import { OutlineProps } from "@/types/Outline.types";

const Outline:React.FC<OutlineProps> = ({outlineRef}:OutlineProps) => {
	return (
		// 研究室紹介のカード
		<div id="outline" className="flex w-5/12 flex-col gap-2" ref={outlineRef}>
			<div className="card">
				<div className="text-2xl w-fit border-b-2 border-fuchsia-400 mb-4">
					<h2>About us</h2>
				</div>
				<div className="flex flex-col gap-1">
					<p>私たちは<strong>沼津工業高等専門学校　鄭研究室</strong>です。</p>
					<p>鄭研究室では、画像認識や音声認識などのAI技術を利用し、社会実装を目指す研究を行っています。</p>
				</div>
			</div>
		</div>
	)
}

export default Outline;