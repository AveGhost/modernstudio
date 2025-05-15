import Image from "next/image"

const SocialIcons = ({classes}: {classes?: string}) => {
    return (
        <div className={`flex ${classes ? classes : ''}`}>
            <Image src="/icons/social/facebook.svg" alt="Facebook" width={24} height={24} className="mx-4 w-12 h-12 md:w-6 md:h-6" />
            <Image src="/icons/social/instagram.svg" alt="Instagram" width={24} height={24} className="mx-4 w-12 h-12 md:w-6 md:h-6" />
        </div>
    )
}

export default SocialIcons