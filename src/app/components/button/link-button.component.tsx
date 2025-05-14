import Link from "next/link"

interface Props {
    children: React.ReactNode
    href: string
}

const LinkButton = ({children, href}: Props) => {
    return (
        <Link href={href} className="border-[#444C54] border-1 p-2 uppercase font-medium text-[12px]">{children}</Link>
    )
}

export default LinkButton