

const DesignArrow = ({direction, borderColor, classes} : {direction: string, borderColor: string, classes?: string}) => {
    const desiginArrowDirection = (direction: string) => {
        if (direction === 'top-right') {
            return 'md:-top-7 md:-right-7 md:border-t-15 md:border-r-15 lg:-top-10 lg:-right-10 lg:border-t-25 lg:border-r-25 -top-5 -right-5 border-t-10 border-r-10'
        } else if (direction === 'top-left') {
            return 'md:-top-7 md:-left-7 md:border-t-15 md:border-l-15 lg:-top-10 lg:-left-10 lg:border-t-25 lg:border-l-25 -top-5 -left-5 border-t-10 border-l-10'
        } else if (direction === 'bottom-right') {
            return 'md:-bottom-7 md:-right-7 md:border-b-15 md:border-r-15 lg:-bottom-10 lg:-right-10 lg:border-b-25 lg:border-r-25 -bottom-5 -right-5 border-b-10 border-r-10'
        } else if (direction === 'bottom-left') {
            return 'md:-bottom-7 md:-left-7 md:border-b-15 md:border-l-15 lg:-bottom-10 lg:-left-10 lg:border-b-25 lg:border-l-25 -bottom-5 -left-5 border-b-10 border-l-10'
        }
    }

    return (
        <span 
        className={`bg-transparent absolute ${desiginArrowDirection(direction)} block w-17 h-17 md:w-[158px] md:h-[158px] ${classes ? classes : ''}` } 
        style={{borderColor: borderColor}}/>
    )
}

export default DesignArrow