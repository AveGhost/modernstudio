import HighlightHeading from "../components/highlight-heading/highlight-heading.component"
import DesignArrow from "../components/design-arrow/design-arrow.component"
import OfferCard from "../components/offer-card/offer-card.component"

const offers = [
    {
        id: 1,
        name: "Apartament z tarasem na dachu",
        location: "Rolna 48",
        image: "/offers/oferta_1.jpg",
        href: "/"
    },
    {
        id: 2,
        name: "Nowoczesny loft w sercu poznania",
        location: "Bóżnicza 1",
        image: "/offers/oferta_2.jpg",
        href: "/"
    },
    {
        id: 3,
        name: "Przytulne mieszkanie z duszą",
        location: "Garbary 30",
        image: "/offers/oferta_3.jpg",
        href: "/"
    },
        {
        id: 4,
        name: "Magiczna przestrzeń dla dużej rodziny",
        location: "Jeleniogórska 5",
        image: "/offers/oferta_4.jpg",
        href: "/"
    }
]

const Offers = () => {
    return (
        <main className="px-6 xl:px-0">
            <div className="mx-auto flex flex-col lg:justify-center lg:items-center lg:text-center gap-6">
                <HighlightHeading fontSize="50px" highLightWidth="150px">Nasza oferta</HighlightHeading>
                <p>Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz<br/> typ nieruchomości, który Cię interesuje.</p>
            </div>
            <section className="pb-10 md:pb-40">
                <div className="flex items-center justify-between lg:justify-center lg:gap-35 py-11">
                    <button className="font-bold">Mieszkanie</button>
                    <button className="font-bold">Dom</button>
                    <button className="font-bold">Działka</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
                    <DesignArrow direction="top-left" borderColor="#444C54" classes="hidden xl:block"/>
                    {offers.map((offer,index) => {
                        return (
                            <OfferCard key={index} location={offer.location} title={offer.name} href={offer.href} image={offer.image}/>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Offers