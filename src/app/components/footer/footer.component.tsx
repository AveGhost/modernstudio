import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="pb-14">
            <p className="!font-[family-name:var(--font-inter)] font-bold mb-8">Modren studio</p>
            <ul className="grid grid-cols-3 gap-2">
                <li><Link href="/">Oferty</Link></li>
                <li><Link href="/">Zespół</Link></li>
                <li><Link href="/">Kontakt</Link></li>
                <li><Link href="/">Realizacje</Link></li>
                <li><Link href="/">Usługi</Link></li>
            </ul>
            <div className="flex items-center justify-end -mr-15">
                <Image src="/icons/social/facebook.svg" alt="Facebook" width={32} height={32} className="mx-4" />
                <Image src="/icons/social/instagram.svg" alt="Instagram" width={32} height={32} className="mx-4" />
            </div>
        </footer>
    )
}

export default Footer