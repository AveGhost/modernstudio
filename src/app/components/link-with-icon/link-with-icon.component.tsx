import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"

const LinkWithIcon = ({children, href, classes}: {children: React.ReactNode, href: string, classes?: string}) => {
    return (
        <Link href={href} className={`flex items-center gap-2 underline w-fit group hover:text-[#222]/70 transition-colors duration-300 ${classes ? classes : ''}`}>
            {children} 
            <Icon icon="mynaui:arrow-right" className="group-hover:ml-2 text-[#222] transition-all duration-300" width="24" height="24" />
        </Link>
    )
}

export default LinkWithIcon