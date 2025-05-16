'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { SampleNextArrow, SamplePrevArrow } from "@/utils/slick-arrows/slick-arrow";
import HighlightHeading from "@/app/components/highlight-heading/highlight-heading.component";

const SingleOffer = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <main className="px-6 xl:px-0">
            <div className="lg:hidden flex flex-col w-full gap-5 mb-8">
                <span className="font-bold relative uppercase text-[16px] before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-[96px] before:h-[1px] before:bg-black/70">Marynarska 51</span>
                <HighlightHeading fontSize="42px" highLightWidth="210px">Magiczna<br/> przestrzeń<br/> dla dużej rodziny</HighlightHeading>
            </div>
            <Slider {...settings}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="relative w-full h-[570px]">
                        <Image src="/offers/oferta.jpg" alt="Photo" fill className="object-cover w-full" />
                    </div>
                ))}
            </Slider>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-8 lg:py-25 w-full">
                <div>
                    <div className="hidden lg:flex flex-col w-full gap-5">
                        <span className="font-bold relative uppercase text-[10px] before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-[96px] before:h-[1px] before:bg-black/70">Marynarska 51</span>
                        <div className="grid grid-cols-[1fr_200px] items-baseline mb-20">
                            <HighlightHeading fontSize="42px" highLightWidth="280px" classes="w-full">Magiczna przestrzeń dla dużej rodziny</HighlightHeading>
                            <span className="text-3xl font-medium !font-[family-name:var(--font-cormorant-garamond)] block w-full">550 000 zł</span>
                        </div>
                    </div>
                    <p>Pomimo braku dostępu do morza w Poznaniu, jak widać za oknem, dla nas nie ma rzeczy niemożliwych. Wyjątkowe mieszkanie z widokiem, którego nie da się zapomnieć.</p>
                </div>
                <div className="flex flex-col gap-11 w-full">
                    <div className="flex gap-7">
                        <div className="relative w-5 h-5">
                            <Image src="/icons/dashboard.svg" alt="Photo" fill className="object-cover w-full" />
                        </div>
                        <p className="font-bold">Typ budynku:</p>
                    </div>
                    <div className="flex gap-7">
                        <div className="relative w-5 h-5">
                            <Image src="/icons/pixel.svg" alt="Photo" fill className="object-cover w-full" />
                        </div>
                        <div className="flex flex-wrap gap-7">
                            <p className="font-bold">Pomieszczenia:</p>
                            <p>4 pokoje / 2 łazienki</p>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="relative w-5 h-5">
                            <Image src="/icons/key.svg" alt="Photo" fill className="object-cover w-full" />
                        </div>
                        <div className="flex flex-wrap gap-7">
                            <p className="font-bold">Dostępność:</p>
                            <p>Styczeń 2022</p>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="relative w-5 h-5">
                            <Image src="/icons/focus.svg" alt="Photo" fill className="object-cover w-full" />
                        </div>
                        <div className="flex flex-wrap gap-7">
                            <p className="font-bold">Powierzchnia:</p>
                            <p>95m2</p>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="relative w-5 h-5">
                            <Image src="/icons/bookmark.svg" alt="Photo" fill className="object-cover w-full" />
                        </div>
                        <div className="flex flex-wrap gap-7">
                            <p className="font-bold">Rodzaj oferty:</p>
                            <p>wynajem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center gap-4 md:gap-12 py-8 md:pb-40">
                <div className="relative w-full min-w-[90px] max-w-[170px] aspect-square rounded-full">
                    <Image src="/offers/avatar.jpg" alt="Photo" fill className="object-cover w-full rounded-full" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p className="font-bold">Kontakt:</p>
                    <p>Anna Żarczyńska</p>
                    <p>ania@msnieruchomości.pl</p>
                    <p>730 026 439</p>
                </div>
            </div>
        </main>
    )
}

export default SingleOffer