'use client'

import Image from "next/image"
import NavigationListWrapper from "./navigation-list/navigation-list-wrapper.component"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const pathname = usePathname();
  const home = pathname === "/"
    return (
      <nav className="flex justify-between items-center relative p-4 max-w-[1270px] mx-auto">
        {home ? <Image src="/Logo.png" alt="Logo" width={96} height={96} className="z-40" />
        : <Link href="/"><Image src="/Logo.png" alt="Logo" width={96} height={96} className="z-40" /></Link>}
        <NavigationListWrapper />
      </nav>
    )
}

export default Navigation