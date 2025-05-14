interface Props {
    children: React.ReactNode
    fontSize?: string
    isRight?: boolean
    classes?: string
}

const HighlightHeading = ({children, fontSize, isRight, classes}: Props) => {
    return (
        <h2 className={`w-fit font-medium relative ${classes ? classes : ''}`} style={{fontSize: fontSize}}>{children}
          <span className={`absolute ${isRight ? 'right-0' : 'left-0'} top-0 bottom-0 w-full max-w-[280px] -z-10 bg-[#DDD4C9]`} style={{ height: `calc(${fontSize} * 1.5)` }} />
        </h2>
    )
}

export default HighlightHeading