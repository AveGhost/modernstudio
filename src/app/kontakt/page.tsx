import HighlightHeading from "../components/highlight-heading/highlight-heading.component"
import Image from "next/image"
import DesignArrow from "../components/design-arrow/design-arrow.component"
import Button from "../components/button/button.component"

const ContantPage = () => {
    return (
        <main className="px-10 xl:px-0">
            <div className="max-w-[1270px] mx-auto py-25">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-15 lg:gap-20 xl:gap-40">
                    <div className="flex flex-col gap-4">
                        <HighlightHeading fontSize="46px" highLightWidth="170px" classes="w-full -ml-10 pl-10 md:-ml-0 md:pl-0">Kontakt</HighlightHeading>
                        <p>Szukasz nieruchomości dla siebie? A może potrzebujesz fachowej pomocy przy sprzedaży własnej nieruchomości? Chętnie odpowiemy na Twoje pytania. Napisz lub zadzwoń.</p>
                        <p className="relative flex items-center gap-4 py-5">
                            <Image src="/icons/mobile.svg" alt="Phone" width={24} height={24} /> 
                            <span className="flex items-center gap-2 font-medium">Telefon: <a href="tel: 730 026 439" className="underline">730 026 439</a></span>
                        </p>
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Imię" className="w-full border-1 border-[#000] p-2 placeholder:text-zinc-500" />
                            <input type="email" placeholder="E-mail" className="w-full border-1 border-[#000] p-2 placeholder:text-zinc-500" />
                            <textarea name="message" id="message" placeholder="Wiadomość" className="w-full p-2 border-1 border-[#000] min-h-[220px] placeholder:text-zinc-500" />
                            <Button type="submit" classes="mt-4 min-w-[140px] text-[12px]">Wyslij</Button>
                        </form>
                    </div>
                    <div className="relative w-full min-h-[650px] hidden md:block">
                        <DesignArrow direction="bottom-left" borderColor="#444C54" />
                        <Image src="/contact/contact.jpg" alt="Photo" fill className="object-cover w-full" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContantPage