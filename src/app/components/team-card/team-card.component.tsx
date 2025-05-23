import Image from "next/image"
import HighlightHeading from "../highlight-heading/highlight-heading.component"

interface Props {
    image: string
    name: string
    position: string
    description: string
    isImageRight?: boolean
    mail: string
    phone: string
}

const TeamCard = ({ image, name, position, description, isImageRight, mail, phone }: Props) => {
    return (
        <div className={`flex justify-between items-center flex-wrap gap-10 md:gap-25 md:flex-nowrap ${isImageRight ? "flex-row-reverse" : "flex-row"}`}>
            <div className="w-full relative aspect-square md:h-[300px] xl:h-[500px]">
                <Image src={image} alt="Photo" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                    <HighlightHeading fontSize="50px" highLightWidth="210px">{name}</HighlightHeading>
                    <span className="text-[#989898] text-[15px] uppercase">{position}</span>
                </div>
                <p>{description}</p>
                <div className="flex flex-col gap-4">
                    <p className="flex gap-4 items-center">
                        <Image src='/icons/letter.svg' width={20} height={20} alt="mail icon" /> 
                        <a href={`mailto:${mail}`} className="underline text-[14px] md:text-lg">{mail}</a>
                    </p>
                    <p className="flex gap-4 items-center">
                        <Image src='/icons/mobile.svg' width={20} height={20} alt="phone icon" /> 
                        <a href={`tel:${phone}`} className="underline text-[14px] md:text-lg">{phone}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard