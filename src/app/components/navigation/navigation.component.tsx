import Image from "next/image"
import NavigationListWrapper from "./navigation-list/navigation-list-wrapper.component"

const Navigation = () => {
    return (
      <nav className="flex justify-between items-center p-4">
        <Image src="/Logo.svg" alt="Logo" width={96} height={96} />
        <NavigationListWrapper />
      </nav>
    )
}

export default Navigation