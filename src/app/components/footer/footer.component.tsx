import Image from "next/image"
import NavigationListElement from "../navigation/navigation-list/navigation-list-element.component"

const Footer = () => {
    return (
        <footer className="pb-14 px-5 grid grid-cols-2 gap-6 md:block md:gap-0 items-center">
            <p className="!font-[family-name:var(--font-inter)] font-bold md:mb-8">Modren studio</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 col-span-2">
                <NavigationListElement href="/" name="Oferty" />
                <NavigationListElement href="/" name="Zespół" />
                <NavigationListElement href="/" name="Kontakt" />
                <NavigationListElement href="/" name="Realizacje" />
                <NavigationListElement href="/" name="Usługi" />
            </ul>
            <div className="flex items-center ml-auto col-2 row-1 md:ml-0 md:justify-end lg:-mr-15">
                <Image src="/icons/social/facebook.svg" alt="Facebook" width={32} height={32} className="mx-4" />
                <Image src="/icons/social/instagram.svg" alt="Instagram" width={32} height={32} className="mx-4" />
            </div>
        </footer>
    )
}

export default Footer