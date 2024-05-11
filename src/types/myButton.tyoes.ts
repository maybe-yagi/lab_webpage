export type myButtonProps = {
  children: React.ReactNode
  onclick?: (event: React.MouseEvent<HTMLButtonElement>)=>void
  className?: string
  onMouseEnter?: ()=>void
  onMouseLeave?: ()=>void
} & JSX.IntrinsicElements['button']