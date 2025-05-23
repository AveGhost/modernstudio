import Image from "next/image"
import DesignArrow from "../design-arrow/design-arrow.component"
import HighlightHeading from "../highlight-heading/highlight-heading.component"

interface Props {
    title: string
    description: string
    image: string
    arrow: {
        direction: string
        color: string
    }
    isImageLeft?: boolean
    imageHeight?: string
}

const RealizationCard = ({ title, description, image, arrow, isImageLeft, imageHeight }: Props) => {
    return (
        <div className={`flex justify-between items-center flex-wrap gap-10 md:gap-20 md:flex-nowrap ${isImageLeft ? "flex-row-reverse" : "flex-row"}`}>
            <div className="flex flex-col gap-7">
                <HighlightHeading fontSize="50px" highLightWidth="170px">{title}</HighlightHeading>
                <p>{description}</p>
            </div>
            <div className={`relative w-full aspect-square h-[350px] md:aspect-auto ${imageHeight ? `md:min-h-[${imageHeight}]` : "md:min-h-[680px]"}`}>
                <Image src={image} alt="Photo" fill className="object-cover" />
                <DesignArrow direction={arrow.direction} borderColor={arrow.color} classes="hidden xl:block"/>
            </div>
        </div>
    )
}

export default RealizationCard