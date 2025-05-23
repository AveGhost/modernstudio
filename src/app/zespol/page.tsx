import Image from "next/image"
import TeamCard from "../components/team-card/team-card.component"

const TeamPage = () => {
    return (
        <main>
            <div className="w-full relative h-[700px] pb-30 flex justify-center items-end overflow-hidden after:bg-gradient-to-t after:from-zinc-800 after:to-transparent after:absolute after:inset-0 after:z-0">
                <Image src='/team/hero.jpg' alt="Photo" fill className="object-cover w-full" />
                <div className="flex flex-col gap-5 items-center w-full z-1 text-white text-center">
                    <h1 className="text-5xl">Poznajmy się</h1>
                    <p>Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego<br/> warto z nami współpracować</p>
                </div>
            </div>
            <div className="max-w-[1270px] mx-auto my-12 lg:my-30 px-6 xl:px-0">
                <div className="flex flex-col gap-12 md:gap-30">
                    <TeamCard 
                        image="/team/anna_zarczynska.jpg" 
                        name="Anna Żarczyńska"
                        position="Pośrednik nieruchomości nr licencji 666"
                        description="Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu. Doświadczenie zawodowe zdobywała w poznańskich kancelariach prawnych. Swoją pracę opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych wnętrz, niebanalnej architektury i sztuki w każdej postaci."
                        mail="ania@msnieruchomosci.pl"
                        phone="730 026 439"
                    />
                    <TeamCard 
                        image="/team/amanda_grabowska.jpg" 
                        name="Amanda Grabowska"
                        position="Agent ds. nieruchomości"
                        description="Z wykształcenia Product & Brand Managerka. Branża nieruchomości od razu okazała się zawodowym strzałem w dziesiątkę - połączeniem pasji do pracy z ludźmi i pokarmu dla kreatywnej duszy. Zachwyca ją proces, który krok po kroku przechodzi wraz z klientem, a każde zlecenie to nowa, fascynująca przygoda, której centrum stanowi człowiek i jego marzenie."
                        mail="amanda@msnieruchomosci.pl"
                        phone="730 026 439"
                        isImageRight={true}
                    />
                    <TeamCard 
                        image="/team/kamila_urbaniak.jpg" 
                        name="Kamila Urbaniak"
                        position="Agent ds. nieruchomości"
                        description="Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach klienta."
                        mail="kamila@msnieruchomosci.pl"
                        phone="730 026 439"
                    />
                    <TeamCard 
                        image="/team/marta_kucharczyk.jpg" 
                        name="Marta Kucharczyk"
                        position="Agent ds. nieruchomości"
                        description="Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach klienta."
                        mail="marta@msnieruchomosci.pl"
                        phone="730 026 439"
                        isImageRight={true}
                    />
                    <TeamCard 
                        image="/team/patrycja_biernaczyk.jpg" 
                        name="Patrycja Biernaczyk"
                        position="Agent ds. nieruchomości"
                        description="Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach klienta."
                        mail="patrycja@msnieruchomosci.pl"
                        phone="730 026 439"
                    />
                </div>
            </div>
        </main>
    )
}

export default TeamPage