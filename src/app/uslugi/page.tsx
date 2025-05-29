import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"
import HighlightHeading from "../components/highlight-heading/highlight-heading.component"
import ShortInfoBox from "../components/short-info-box/short-info-box.component"

const ServicePage = () => {
    return (
        <main className="px-10 xl:px-0">
            <div className="max-w-[1270px] mx-auto">
                <div className="grid md:grid-cols-[350px_1fr] lg:grid-cols-[500px_1fr] pb-4 place-items-center border-b-1 border-[#DDD4C9]">
                    <div className="md:p-5 w-full -mb-25 lg:-mg-0 lg:-mr-32 z-10">
                        <h1 className="text-5xl">Obsługę nieruchomości<br/> wymyśliliśmy<br/> na nowo</h1>
                    </div>
                    <div className="w-full h-full min-h-[350px] md:min-h-[630px] relative">
                        <Image src="/service/uslugi.jpg" alt="Photo" fill className="object-cover w-full opacity-70" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 py-6 md:py-12">
                    <a href="#services" className="flex items-center gap-4 font-bold w-fit order-2 md:order-1">
                        <Icon icon="mdi-light:arrow-down" width="24" height="24" className="animate-bounce" /> 
                        Czytaj dalej
                    </a>
                    <p className="md:justify-self-end order-1 md:order-2">Poziom zaangażowania i zakres usług Modern Studio<br/> wykracza daleko poza to, co oferują inne biura<br/> nieruchomości – sprawdź, jak możemy Ci pomóc.</p>
                </div>
                <section className="py-30" id="services">
                    <HighlightHeading fontSize="46px" isRight={true} highLightWidth="260px" classes="mb-17">Jak możemy Ci pomóc?</HighlightHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5">
                        <ShortInfoBox heading="Pośrednictwo w obrocie nieruchomościami" icon="/icons/team.svg">
                            <p>Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości.</p>
                        </ShortInfoBox>
                        <ShortInfoBox heading="Kompleksowe doradztwo" icon="/icons/lightbowl.svg">
                            <p>Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.</p>
                        </ShortInfoBox>
                        <ShortInfoBox heading="Home staging" icon="/icons/heart.svg">
                            <p>Profesjonalne przygotowanie nieruchomości niewielkim nakładem środków do szybkiej transakcji. Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura.</p>
                        </ShortInfoBox>
                        <ShortInfoBox heading="Współpraca z deweloperem" icon="/icons/developer.svg">
                            <p>Pośrednictwo w zakresie sprzedaży inwestycji deweloperskiej (pełen zakres, znajomość lokalnych inwestycji/pewność wysokiej jakości wykonania)</p>
                        </ShortInfoBox>
                        <ShortInfoBox heading="Współpraca z inwestorem" icon="/icons/business.svg">
                            <p>Kompleksowa obsługa klienta poszukującego nieruchomości w celach inwestycyjnych (lokata kapitału, analiza rynku).</p>
                        </ShortInfoBox>
                        <ShortInfoBox heading="Współpraca z architektem" icon="/icons/pencil.svg">
                            <p>Współpraca z zaprzyjaźnionym biurem architektonicznym w zakresie projektowania wnętrz (zarówno prywatnych jak i komercyjnych) i kompleksowej usługi wykończenie pod klucz.</p>
                        </ShortInfoBox>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ServicePage