import Link from "next/link"

interface Props {
    children: React.ReactNode
    href: string
}

const LinkButton = ({children, href}: Props) => {
    return (
        <Link href={href} className="border-[#444C54] border-1 p-2 overflow-hidden uppercase font-medium text-[12px] relative hover:text-white transition-colors duration-300 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:w-[300px] before:h-[300px] before:translate-x-[-50%] before:scale-0 before:translate-y-[-50%] before:rounded-full before:bg-[#444C54] before:transition-all before:duration-500 before:z-[-1] hover:before:scale-100 hover:before:translate-x-[-50%] hover:before:translate-y-[-50%]">{children}</Link>
    )
}

export default LinkButton