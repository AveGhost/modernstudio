import Image from "next/image";
import DesignArrow from "./components/design-arrow/design-arrow.component";
import LinkButton from "./components/button/link-button.component";
import HighlightHeading from "./components/highlight-heading/highlight-heading.component";
import LinkWithIcon from "./components/link-with-icon/link-with-icon.component";
import ShortInfoBox from "./components/short-info-box/short-info-box.component";
import Button from "./components/button/button.component";

export default function Home() {
  return (
    <main className="px-10 xl:px-0">
      <div className="grid grid-cols-[auto_1fr] place-items-center">
        <div className="md:p-5 w-full md:w-auto md:bg-[#fff]/80 md:-mr-32 z-10">
          <h1 className="text-5xl">Biuro nieruchomości,<br/> którego potrzebujesz</h1>
          <p className="text-base mt-5 md:mt-2">Sprawdź, co oznacza dla nas bezkonkurencyjność</p>
        </div>
        <div className="w-full h-full min-h-[630px] relative hidden md:block">
          <Image src="/home/biuro_nieruchomosci.jpg" alt="Photo" fill className="object-cover w-full" />
        </div>
        <div className="w-full h-full min-h-[800px] block md:hidden">
          <Image src="/home/biuro_nieruchomosci_mobile.jpg" alt="Photo" fill className="object-cover w-full" />
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 lg:grid lg:gap-0 lg:grid-cols-[1fr_auto] relative py-19 lg:py-40">
        <div className="w-full h-full max-w-[80%] min-h-[630px] relative z-0 hidden lg:block">
          <Image src="/home/obsluga_nieruchomosci.jpg" alt="Photo" fill className="object-cover" />
          <DesignArrow direction="bottom-left" borderColor="#E0D5D2" />
        </div>
        <div className="w-full h-full min-h-[160px] relative z-0 lg:hidden block">
          <Image src="/home/obsluga_nieruchomosci_mobile.jpg" alt="Photo" fill className="object-cover" />
          <DesignArrow direction="bottom-left" borderColor="#DDD4C9" />
        </div>
        <div className="block w-full relative lg:absolute z-10 lg:top-[38%] right-0 lg:max-w-[540px] md:justify-self-end">
          <div className="hidden lg:block">
            <DesignArrow direction="top-right" borderColor="#4E8074" />
          </div>
          <div className="lg:hidden block">
            <DesignArrow direction="top-right" borderColor="#444C54" />
          </div>
          <div className="py-12 px-6 lg:p-16 bg-[#444C54] lg:bg-[#4E8074] z-10 text-white flex flex-col lg:justify-center lg:items-center w-fit gap-10">
            <h2 className="text-[25px] lg:text-[42px] font-medium">Obsługę nieruchomości<br /> wymyśliliśmy na nowo</h2>
            <p className="text-base mt-2">Modern Studio to nowoczesne biuro nieruchomości z profesjonalnym i innowacyjnym podejściem do tematu nieruchomości i inwestycji.</p>
            <p className="text-base mt-2">Klienci wybierają nas, ponieważ zakres naszych usług wykracza poza to, co jest w stanie zaoferować konkurencja.</p>
          </div>
        </div>
      </div>
      <section className="pb-12 md:pb-40">
        <HighlightHeading fontSize="50px" classes="hidden md:block mx-auto mb-25" highLightWidth="280px" isRight>Dlaczego szukasz właśnie nas?</HighlightHeading>
        <HighlightHeading fontSize="42px" classes="md:hidden block mx-auto mb-10" highLightWidth="295px">Dlaczego szukasz właśnie nas?</HighlightHeading>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-10">
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
      <section className="pb-12 md:pb-40">
        <h2 className="text-5xl w-fit mx-auto font-medium relative text-center mb-8 md:mb-15">Oferta</h2>
        <div className="flex flex-wrap justify-center sm:justify-between gap-5 md:gap-10 items-center w-fit mx-auto">
          <LinkButton href="/oferta">Bieżące oferty</LinkButton>
          <LinkButton href="/realizacje">Nasze realizacje</LinkButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-6 mt-16">
          <div className="relative w-full h-[250px] md:h-[200px]">
            <Image src="/home/oferta_1.jpg" alt="Photo" fill className="w-full object-cover" />
          </div>
          <div className="relative w-full h-[125px] row-1 md:h-full md:row-span-2">
            <Image src="/home/oferta_2.jpg" alt="Photo" fill className="w-full object-cover" />
            <DesignArrow direction="top-right" borderColor="#444C54" classes="hidden md:block" />
          </div>
          <div className="relative w-full h-[125px] md:h-full md:row-span-2">
            <Image src="/home/oferta_3.jpg" alt="Photo" fill className="w-full object-cover" />
            <DesignArrow direction="bottom-left" borderColor="#DDD4C9" classes="hidden md:block" />
          </div>
          <div className="relative w-full h-[250px] md:h-[200px]">
            <Image src="/home/oferta_4.jpg" alt="Photo" fill className="w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="pb-12 md:pb-40">
        <div className="flex flex-col md:grid w-full gap-10 md:grid-cols-2 mb-10">
          <HighlightHeading fontSize="50px" highLightWidth="285px" classes="leading-[1.2] order-1">Twój komfort<br/> ponad wszystko</HighlightHeading>
          <p className="order-3 md:order-2">To, co dla innych biur nieruchomości wykracza poza<br/> zakres usług, dla nas jest standardem. Wyróżnia nas<br/> bezkompromisowa troska o interes klienta.</p>
          <LinkWithIcon href="/" classes="order-2 col-span-2 md:order-3">Sprawdź pełen zakres naszych usług</LinkWithIcon>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-10 mt-11 md:mt-31">
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
      <section className="pb-12 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10">
          <div className="flex flex-col gap-10">
            <HighlightHeading fontSize="50px" highLightWidth="240px" isRight classes="hidden md:block">Poznaj nasz zespół</HighlightHeading>
            <HighlightHeading fontSize="50px" highLightWidth="240px" classes="md:hidden block">Poznaj nasz zespół</HighlightHeading>
            <p>Dzięki doskonałej współpracy i przyjacielskiej atmosferze<br/> udało nam się stworzyć zespół doskonały.</p>
            <LinkWithIcon href="/">Sprawdź, kim jesteśmy</LinkWithIcon>
          </div>
          <div className="relative w-full h-full aspect-square row-span-2">
            <Image src="/home/nasz_zespol_1.jpg" alt="Photo" fill className="w-full object-cover" />
            <div className="hidden md:block">
              <DesignArrow direction="top-right" borderColor="#DDD4C9" />
            </div>
            <div className="md:hidden block">
              <DesignArrow direction="bottom-right" borderColor="#444C54" />
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-[320px] h-full ml-auto hidden md:block">
            <Image src="/home/nasz_zespol_2.jpg" alt="Photo" fill className="w-full object-cover" />
            <DesignArrow direction="bottom-left" borderColor="#444C54" />
          </div>
        </div>
      </section>
      <section className="pb-12 md:pb-40">
        <div className="flex flex-col-reverse gap-7 md:flex-row items-center justify-between">
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
            <HighlightHeading fontSize="50px" highLightWidth="240px" classes="leading-[1.2]">Co mówią o nas<br/> nasi klienci?</HighlightHeading>
            <p>Bezkompromisowo wspieramy naszych klientów a ich<br/> satysfakcja jest dla nas najważniejszym celem.</p>
          </div>
        </div>
      </section>
      <section className="pb-12 md:pb-40">
        <HighlightHeading fontSize="50px" highLightWidth="180px" classes="mx-auto mb-9">Napisz do nas</HighlightHeading>
        <form className="flex flex-col mx-auto max-w-[400px] gap-4">
          <input type="email" name="email" id="email" placeholder="Adres e-mail" className="border-[#444C54] border-1 p-2" />
          <textarea name="message" id="message" placeholder="Wiadomość" className="border-[#444C54] border-1 p-2 min-h-[220px]" />
          <Button type="submit" classes="mx-auto min-w-[140px] text-[12px] font-medium">Wyślij</Button>
        </form>
      </section>
    </main>
  );
}
