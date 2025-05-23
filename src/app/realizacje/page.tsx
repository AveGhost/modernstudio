import RealizationCard from "../components/realization-card/realization-card.component"
import HighlightHeading from "../components/highlight-heading/highlight-heading.component"
import DesignArrow from "../components/design-arrow/design-arrow.component"
import Image from "next/image"

const Realizations = () => {
    return (
        <main className="px-6 xl:px-0">
            <div className="max-w-[1270px] mx-auto">
                <section className="flex flex-col gap-16 md:gap-32 pb-12 md:pb-30">
                    <RealizationCard 
                        title="Poznaj nasze realizacje" 
                        description="Każda współpraca to dla nas wspaniała przygoda, a to co po niej pozostaje, to pełna satysfakcja naszych klientów. Sprawdź, co udało nam się do tej pory osiągnąć." 
                        image="/realizations/realization_1.jpg" 
                        arrow={{ direction: "bottom-right", color: "#444C54" }}
                        imageHeight="min-h-[520px]"
                    />
                    <RealizationCard 
                        title="ul.Sielska" 
                        description="Usługa obejmowała zarówno pośrednictwo w wynajmie nieruchomości, jak również pełną aranżację wnętrza i przestrzeni mieszkania. Nieruchomość została zarezerwowana na 1 prezentacji." 
                        image="/realizations/realization_2.jpg" 
                        arrow={{ direction: "top-left", color: "#DDD4C9" }}
                        isImageLeft={true}
                    />
                    <RealizationCard 
                        title="ul.Fieldorfa" 
                        description="Mieszkanie sprzedawane przez zaprzyjaźnionych właścicieli, z którymi połączyłyśmy transakcję sprzedaży nieruchomości z zakupem ich nowego mieszkania." 
                        image="/realizations/realization_3.jpg" 
                        arrow={{ direction: "bottom-right", color: "#444C54" }}
                    />
                    <RealizationCard 
                        title="ul.Rolna" 
                        description="Nietuzinkowe mieszkanie, które zarówno na nas jak i na klientach zrobiło ogromne wrażenie, a wisienką na torcie był przestronny i klimatyczny taras na dachu." 
                        image="/realizations/realization_4.jpg" 
                        arrow={{ direction: "top-left", color: "#DDD4C9" }}
                        isImageLeft={true}
                    />
                    <div className="flex flex-col gap-25">
                        <div className="flex flex-col gap-8 max-w-[600px] mx-auto text-center">
                            <HighlightHeading fontSize="50px" highLightWidth="165px" classes="block mx-auto">ul. Staszica</HighlightHeading>
                            <p>Transakcja wynajmu mieszkania, przy której na naszych oczach zrodziła się piękna przyjaźń między Wynajmującą - Panią Katarzyną, a Najemczynią - Panią Gosią</p>
                        </div>
                        <div className="relative w-full h-[600px]">
                            <DesignArrow direction="top-left" borderColor="#DDD4C9" classes="hidden xl:block"/>
                            <Image src="/realizations/realization_5.jpg" alt="Photo" fill className="object-cover" />
                            <DesignArrow direction="bottom-right" borderColor="#DDD4C9" classes="hidden xl:block"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Realizations