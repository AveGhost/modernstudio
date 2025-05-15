'use client'

import NavigationListElement from "./navigation-list-element.component"
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
import SocialIcons from "../../socials/social.compoenent"

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
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <Icon
                key={isOpen ? "menu-to-close" : "close-to-menu"}
                icon={
                isOpen
                    ? "line-md:menu-to-close-alt-transition"
                    : "line-md:close-to-menu-alt-transition"
                }
                width="32"
                height="32"
                className={`cursor-pointer transition-all block md:hidden duration-100 z-60 ${isOpen ? "fixed top-10 right-10" : ""}`}
                onClick={toggleMenu}
            />
            <div className={`${isOpen ? "flex" : "hidden"} flex-col items-center justify-around w-full overflow-hidden bg-white fixed top-0 left-0 bottom-0 h-full z-50 md:contents`}>
                <Image src="/Logo.png" alt="Logo" className={`${isOpen ? "block" : "hidden"}`} width={144} height={144} />
                <ul className={`${isOpen ? "flex" : "hidden"} md:flex md:flex-row md:gap-4 md:w-auto flex-col w-full items-center gap-16 py-11`}>
                    {Links.map((link,index) => <NavigationListElement key={index} href={link.href} name={link.name} classes="px-4 text-[22px] md:text-[15px]" />)}
                    <SocialIcons classes="hidden md:flex" />
                </ul>
                <SocialIcons classes="md:hidden" />
            </div>
        </>
    )
}

export default NavigationListWrapper