interface Props {
    children: React.ReactNode
    type?: "button" | "submit"
    onClick?: () => void
    classes?: string
}

const Button = ({children, type, onClick, classes}: Props) => {
    return (
        <button type={!type ? 'button' : type} onClick={onClick} className={`border-[#444C54] cursor-pointer w-fit border-1 p-2 uppercase overflow-hidden relative hover:text-white transition-colors duration-300 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:w-[300px] before:h-[300px] before:translate-x-[-50%] before:scale-0 before:translate-y-[-50%] before:rounded-full before:bg-[#444C54] before:transition-all before:duration-500 before:z-[-1] hover:before:scale-100 hover:before:translate-x-[-50%] hover:before:translate-y-[-50%] ${classes ? classes : ''}`}>{children}</button>
    )
}

export default Button