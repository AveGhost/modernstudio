'use client'

import NavigationListElement from "../navigation/navigation-list/navigation-list-element.component"
import { Links } from "@/data/links"
import SocialIcons from "../socials/social.component"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Footer = () => {
    const pathname = usePathname();
    const home = pathname === "/"
    return (
        <footer className="pb-14 px-5 grid grid-cols-2 gap-6 md:block md:gap-0 items-center max-w-[1270px] mx-auto">
            <Link href={home ? "#" : "/"} className="!font-[family-name:var(--font-inter)] block w-fit font-bold md:mb-8">Modren studio</Link>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 col-span-2">
                {Links.map(link => <NavigationListElement key={link.name} href={link.href} name={link.name} />)}
            </ul>
            <SocialIcons classes="items-center ml-auto col-2 row-1 md:ml-0 md:justify-end lg:-mr-15" />
        </footer>
    )
}

export default Footer