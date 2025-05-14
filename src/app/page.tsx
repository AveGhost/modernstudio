import Navigation from "./components/navigation/navigation.component";
import Image from "next/image";
import DesignArrow from "./components/design-arrow/design-arrow.component";
import LinkButton from "./components/button/link-button.component";
import HighlightHeading from "./components/highlight-heading/highlight-heading.component";
import LinkWithIcon from "./components/link-with-icon/link-with-icon.component";
import ShortInfoBox from "./components/short-info-box/short-info-box.component";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="grid grid-cols-[auto_1fr] place-items-center">
        <div className="p-5 bg-[#fff]/80 -mr-32 z-10">
          <h1 className="text-5xl">Biuro nieruchomości,<br/> którego potrzebujesz</h1>
          <p className="text-base mt-2">Sprawdź, co oznacza dla nas bezkonkurencyjność</p>
        </div>
        <div className="w-full h-full min-h-[630px] relative">
          <Image src="/home/biuro_nieruchomosci.jpg" alt="Photo" fill className="object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] relative py-40">
        <div className="w-full h-full max-w-[80%] min-h-[630px] relative z-0">
          <Image src="/home/obsluga_nieruchomosci.jpg" alt="Photo" fill className="object-cover" />
          <DesignArrow direction="bottom-left" borderColor="#E0D5D2" />
        </div>
        <div className="absolute z-10 top-[40%] right-15 max-w-[540px] justify-self-end">
          <DesignArrow direction="top-right" borderColor="#4E8074" />
          <div className="p-16 bg-[#4E8074] z-10 text-white flex flex-col justify-center items-center w-fit gap-10">
            <h2 className="text-[42px] font-medium">Obsługę nieruchomości<br /> wymyśliliśmy na nowo</h2>
            <p className="text-base mt-2">Modern Studio to nowoczesne biuro nieruchomości z profesjonalnym i innowacyjnym podejściem do tematu nieruchomości i inwestycji.</p>
            <p className="text-base mt-2">Klienci wybierają nas, ponieważ zakres naszych usług wykracza poza to, co jest w stanie zaoferować konkurencja.</p>
          </div>
        </div>
      </div>
      <section className="pb-40">
        <HighlightHeading fontSize="50px" classes="mx-auto mb-25" isRight>Dlaczego szukasz właśnie nas?</HighlightHeading>
        <div className="flex justify-between items-center gap-10">
          <ShortInfoBox heading="Kompleksowa obsługa">
            <p>Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość? Zajmiemy się Twoją sprawą od A do Z, aby zaoszczędzić Twój czas.</p>
          </ShortInfoBox>
          <ShortInfoBox heading="Agent na wyłączność">
            <p>W powierzane nam zlecenia angażujemy się w 100% – dzięki nam zaoszczędzisz maksimum czasu, zachowująć przy tym pełną kontrolę.</p>
          </ShortInfoBox>
          <ShortInfoBox heading="Zgrany zespół">
            <p>Doskonale rozumiemy Twoje potrzeby. Jesteśmy zespołem o zróżnicowanych kompetencjach, dzięki którym świetnie się uzupełniamy</p>
          </ShortInfoBox>
        </div>
      </section>
      <section className="pb-40">
        <h2 className="text-5xl w-fit mx-auto font-medium relative text-center mb-15">Oferta</h2>
        <div className="flex justify-between gap-10 items-center w-fit mx-auto">
          <LinkButton href="/oferta">Bieżące oferty</LinkButton>
          <LinkButton href="/realizacje">Nasze realizacje</LinkButton>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mt-16">
          <div className="relative w-full h-[200px]">
            <Image src="/home/oferta_1.jpg" alt="Photo" fill className="w-full object-cover" />
          </div>
          <div className="relative w-full h-full row-span-2">
            <Image src="/home/oferta_2.jpg" alt="Photo" fill className="w-full object-cover" />
            <DesignArrow direction="top-right" borderColor="#444C54" />
          </div>
          <div className="relative w-full h-full row-span-2">
            <Image src="/home/oferta_3.jpg" alt="Photo" fill className="w-full object-cover" />
            <DesignArrow direction="bottom-left" borderColor="#DDD4C9" />
          </div>
          <div className="relative w-full h-[200px]">
            <Image src="/home/oferta_4.jpg" alt="Photo" fill className="w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="pb-40">
        <div className="grid grid-cols-2 mb-10">
          <HighlightHeading fontSize="50px" classes="leading-[1.2]">Twój komfort ponad<br/> wszystko</HighlightHeading>
          <p>To, co dla innych biur nieruchomości wykracza poza<br/> zakres usług, dla nas jest standardem. Wyróżnia nas<br/> bezkompromisowa troska o interes klienta.</p>
        </div>
        <LinkWithIcon href="/">Sprawdź pełen zakres naszych usług</LinkWithIcon>
        <div className="flex items-center gap-10 mt-31">
          <ShortInfoBox heading="Pośrednictwo">
            <p>Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości</p>
          </ShortInfoBox>
          <ShortInfoBox heading="Doradztwo">
            <p>Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.</p>
          </ShortInfoBox>
          <ShortInfoBox heading="Home staging">
            <p>Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura podnosi atrakcyjność oferty na rynku.</p>
          </ShortInfoBox>
          <ShortInfoBox heading="Współpraca z najlepszymi">
            <p>Poznański rynek znamy jak własną kieszeń – współpracując z nami wybierasz najlepszych deweloperów, prawników i architektów.</p>
          </ShortInfoBox>
        </div>
      </section>
      <section className="pb-40">
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div className="flex flex-col gap-10">
            <HighlightHeading fontSize="50px" isRight>Poznaj nasz zespół</HighlightHeading>
            <p>Dzięki doskonałej współpracy i przyjacielskiej atmosferze<br/> udało nam się stworzyć zespół doskonały.</p>
            <LinkWithIcon href="/">Sprawdź, kim jesteśmy</LinkWithIcon>
          </div>
          <div className="relative w-full h-full aspect-square row-span-2">
            <Image src="/home/nasz_zespol_1.jpg" alt="Photo" fill className="w-full object-cover" />
            <DesignArrow direction="top-right" borderColor="#DDD4C9" />
          </div>
          <div className="relative w-full aspect-square max-w-[320px] h-full ml-auto">
            <Image src="/home/nasz_zespol_2.jpg" alt="Photo" fill className="w-full object-cover" />
            <DesignArrow direction="bottom-left" borderColor="#444C54" />
          </div>
        </div>
      </section>
      <section className="pb-40">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-14 w-full">
            <div className="border-1 border-[#D6D6D6] p-10 w-full flex flex-col gap-6 max-w-[560px]">
              <p>Udało się znaleźć kupca na nasze mieszkanie w jedne dzień!<br/> Cały proces był przeprowadzony bardzo sprawnie,<br/> profesjonalnie i dla nas jako klientów bezboleśnie. Ania ma<br/> prawdziwy dar tłumaczenia zawiłości i dopinania detali. </p>
              <span className="font-bold">Katarzyna</span>
            </div>
            <div className="border-1 border-[#D6D6D6] p-10 w-full flex flex-col gap-6 max-w-[560px]">
              <p>Współpraca na najwyższym poziomie. Jeśli zależy Wam na<br/> szybkiej, bezproblemowej  sprzedaży czy zakupie<br/> mieszkania/ domu to nie ma lepszego miejsca.</p>
              <span className="font-bold">Kamila</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-8">
            <HighlightHeading fontSize="50px" classes="leading-[1.2]">Co mówią o nas<br/> nasi klienci?</HighlightHeading>
            <p>Bezkompromisowo wspieramy naszych klientów a ich<br/> satysfakcja jest dla nas najważniejszym celem.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
