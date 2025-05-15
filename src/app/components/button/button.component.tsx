interface Props {
    children: React.ReactNode
    type?: "button" | "submit"
    onClick?: () => void
    classes?: string
}

const Button = ({children, type, onClick, classes}: Props) => {
    return (
        <button type={!type ? 'button' : type} onClick={onClick} className={`border-[#444C54] w-fit border-1 p-2 uppercase ${classes ? classes : ''}`}>{children}</button>
    )
}

export default Button