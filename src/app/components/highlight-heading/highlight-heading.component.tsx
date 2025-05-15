interface Props {
    children: React.ReactNode
    fontSize?: string
    isRight?: boolean
    classes?: string
    highLightWidth?: string
}

const HighlightHeading = ({children, fontSize, isRight, classes, highLightWidth}: Props) => {
    return (
        <h2 className={`w-fit font-medium relative ${classes ? classes : ''}`} style={{fontSize: fontSize}}>{children}
          <span className={`absolute ${isRight ? '-right-2' : '-left-2'} top-0 bottom-0 w-full -z-10 bg-[#DDD4C9]`} style={{ height: `calc(${fontSize} * 1.5)`, maxWidth: highLightWidth }} />
        </h2>
    )
}

export default HighlightHeading