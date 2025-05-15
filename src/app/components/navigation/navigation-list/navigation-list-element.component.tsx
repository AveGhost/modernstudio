import Link from "next/link"

const NavigationListElement = ({href, name, classes}: {href: string, name: string, classes?: string}) => {
    return (
        <li><Link href={href} className={`relative w-fit overflow-hidden text-[15px] before:content-[''] before:w-[50px] before:h-[1px] before:absolute before:bg-[#444C54] before:left-0 before:right-0 before:bottom-0 before:mx-auto before:scale-x-0 before:transition-all before:duration-300 hover:before:-scale-x-100 ${classes ? classes : ''}`}>{name}</Link></li>
    )
}

export default NavigationListElement