import Link from "next/link"

interface Props {
    location: string
    title: string
    href: string
    image: string
}

const OfferCard = ({location, title, href, image}: Props) => {
    return (
        <Link href={href} className={`w-full relative h-[360px] bg-center flex flex-col justify-end p-5 gap-2 text-white before:content-[''] before:translate-y-[-50%] before:translate-x-[-50%] before:w-full before:h-full before:top-1/2 before:left-1/2 before:shadow-[inset_0_0_0_0px_#444C54] before:z-1 before:transition-all before:duration-700 hover:before:shadow-[inset_0_0_0_200px_#444C54] before:opacity-40 before:absolute group cursor-pointer`} style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <span className="opacity-0 absolute top-1/2 left-1/2 translate-[-50%] group-hover:opacity-100 font-bold uppercase text-[10px] transition-opacity duration-300 z-2">Zobacz</span>
            <span className="font-bold relative uppercase text-[10px] before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-[96px] before:h-[1px] before:bg-white/70">{location}</span>
            <h2 className="font-bold text-lg max-w-[22ch]">{title}</h2>
        </Link>
    )
}

export default OfferCard