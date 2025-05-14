import NavigationListElement from "./navigation-list-element.component"
import Image from "next/image"

const Links = [
    {
        name: "Oferty",
        href: "/"
    },
    {
        name: "Realizacje",
        href: "/"
    },
    {
        name: "Zespoł",
        href: "/"
    },
    {
        name: "Usługi",
        href: "/"
    },
    {
        name: "Kontakt",
        href: "/"
    }
]

const NavigationListWrapper = () => {
    return (
        <ul className="flex items-center gap-4">
            {Links.map((link,index) => <NavigationListElement key={index} href={link.href} name={link.name} />)}
            <Image src="/icons/social/facebook.svg" alt="Facebook" width={24} height={24} className="mx-4" />
            <Image src="/icons/social/instagram.svg" alt="Instagram" width={24} height={24} className="mx-4" />
        </ul>
    )
}

export default NavigationListWrapper