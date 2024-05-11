import { motion } from "framer-motion";
import { myButtonProps } from "@/types/myButton.tyoes";
import styles from "@/styles/MyButton.module.css";

const MyButton = ({
  children,
  className='',
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled,
}: myButtonProps) => (
  <motion.button
    className={`rounded bg-gradient-to-r px-4 py-2 disabled:opacity-50 ${styles.mybutton} ${className}`}
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
