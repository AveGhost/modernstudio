import Image from "next/image"
import NavigationListWrapper from "./navigation-list/navigation-list-wrapper.component"

const Navigation = () => {
    return (
      <nav className="flex justify-between items-center relative p-4">
        <Image src="/Logo.png" alt="Logo" width={96} height={96} className="z-40" />
        <NavigationListWrapper />
      </nav>
    )
}

export default Navigation