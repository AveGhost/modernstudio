import Image from "next/image"

interface Props {
    children: React.ReactNode
    heading: string
    icon?: string
}

const ShortInfoBox = ({children, heading, icon}: Props) => {
    return (
        <div className="flex flex-col gap-2">
            {icon &&
            <span className="w-15 h-15 border-1 border-[#C3C2C1] flex items-center justify-center">
                <Image src={icon} alt="Icon" width={24} height={24} />
            </span>}
            <h3 className="font-bold text-xl">{heading}</h3>
            {children}
        </div>
    )
}

export default ShortInfoBox