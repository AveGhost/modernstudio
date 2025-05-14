import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"

const LinkWithIcon = ({children, href}: {children: React.ReactNode, href: string}) => {
    return (
        <Link href={href} className="flex items-center gap-2 underline w-fit">{children} <Icon icon="mynaui:arrow-right" width="24" height="24" /></Link>
    )
}

export default LinkWithIcon