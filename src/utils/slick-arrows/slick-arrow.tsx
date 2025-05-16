import { Icon } from "@iconify/react/dist/iconify.js";

export function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div className={`${className} !text-white !text-[24px] leading-1`}>
            <Icon icon="iconamoon:arrow-right-2-thin" width="40" height="40" onClick={onClick} />
        </div>
    );
}

export function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div className={`${className} !text-white !text-[24px] leading-1`}>
            <Icon icon="iconamoon:arrow-left-2-thin" width="40" height="40" onClick={onClick} />
        </div>
    );
}