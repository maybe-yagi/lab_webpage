import { motion } from "framer-motion";
import { myButtonProps } from "@/types/myButton.tyoes";

const MyButton = ({
  children,
  className='',
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled,
}: myButtonProps) => (
  <motion.button
    className={`rounded-full ${className}`}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 100, damping: 10}}
    onMouseEnter={()=>{
      if(onMouseEnter) onMouseEnter()
    }}
    onMouseLeave={()=>{
      if(onMouseLeave) onMouseLeave()
    }}
    disabled={disabled}
  >
    {children}
  </motion.button>
);

export default MyButton;
