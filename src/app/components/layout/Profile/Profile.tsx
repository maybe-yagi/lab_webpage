import Image from "next/image";
import { ProfileProps } from "@/types/Profile.types";
import { motion } from "framer-motion";
import { cardVariants } from "../../common/Animation";

const Profile:React.FC<ProfileProps> = ({profileRef}:ProfileProps) => {
  return(
    <motion.div id="profile" className="my-5 flex w-5/12 flex-col gap-2 items-center" ref={profileRef}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card w-full" variants={cardVariants}>
        <div className="flex flex-nowrap items-center">
          <div className="mr-5">
            <Image alt="profile photo" src="/images/jeong.png" width={200} height={200} className="rounded-full"/>
          </div>
          <div>
            <div className="text-2xl w-fit border-b-2 border-fuchsia-400 mb-4">
              <h2>Profile</h2>
            </div>
            <div className="gap-1">
              <p>name:　鄭　萬溶</p>
              <p>specialty:　振動工学、人工知能</p>
              <div className="flex flex-row">
                <p>background:　</p>
                <div className="flex flex-col">
                  <p>1989.2　朝鮮大学校　機械設計工学科</p>
                  <p>1991.2　同大学院　機械設計工学科</p>
                  <p>1996.3　東京都立大学工学研究所博士課程</p>
                  <p>機械工学専攻</p>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Profile;