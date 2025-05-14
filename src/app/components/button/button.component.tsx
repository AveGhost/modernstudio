interface Props {
    text: string
    type?: "button" | "submit"
    onClick?: () => void
}

const Button = ({text, type, onClick}: Props) => {
    return (
        <button type={!type ? 'button' : type} onClick={onClick} className="border-[#444C54] p-2 uppercase">{text}</button>
    )
}

export default Button