import Link from "next/link"

const NavigationListElement = ({href, name}: {href: string, name: string}) => {
    return (
        <li className="px-4 text-[15px]"><Link href={href}>{name}</Link></li>
    )
}

export default NavigationListElement