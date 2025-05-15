import Link from "next/link"
import Image from "next/image"
import NavigationListElement from "../navigation/navigation-list/navigation-list-element.component"

const Footer = () => {
    return (
        <footer className="pb-14">
            <p className="!font-[family-name:var(--font-inter)] font-bold mb-8">Modren studio</p>
            <ul className="grid grid-cols-3 gap-2">
                <NavigationListElement href="/" name="Oferty" />
                <NavigationListElement href="/" name="Zespół" />
                <NavigationListElement href="/" name="Kontakt" />
                <NavigationListElement href="/" name="Realizacje" />
                <NavigationListElement href="/" name="Usługi" />
            </ul>
            <div className="flex items-center justify-end -mr-15">
                <Image src="/icons/social/facebook.svg" alt="Facebook" width={32} height={32} className="mx-4" />
                <Image src="/icons/social/instagram.svg" alt="Instagram" width={32} height={32} className="mx-4" />
            </div>
        </footer>
    )
}

export default Footer