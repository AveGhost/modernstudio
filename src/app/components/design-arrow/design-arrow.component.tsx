const DesignArrow = ({direction, borderColor} : {direction: string, borderColor: string}) => {
    const desiginArrowDirection = (direction: string) => {
        if (direction === 'top-right') {
            return '-top-10 -right-10 border-t-25 border-r-25'
        } else if (direction === 'top-left') {
            return '-top-10 -left-10 border-t-25 border-l-25'
        } else if (direction === 'bottom-right') {
            return '-bottom-10 -right-10 border-b-25 border-r-25'
        } else if (direction === 'bottom-left') {
            return '-bottom-10 -left-10 border-b-25 border-l-25'
        }
    }

    return (
        <span 
        className={`bg-transparent absolute ${desiginArrowDirection(direction)} block w-[158px] h-[158px]`} 
        style={{borderColor: borderColor}}/>
    )
}

export default DesignArrow