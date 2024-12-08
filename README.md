# Procesverslag
https://mickvdboom.github.io/blok2WEB/

Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Mick van den Boom

  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
 https://www.debijenkorf.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Detailpagina van product  
  
  https://www.debijenkorf.nl/tommy-hilfiger-vintage-t-shirt-met-logo-en-backprint-7560013961-756001396100000
  
  <img src="readme-images/1e-deel-pag-1.jpg" width="200px" alt="eerste pagina foto een">
  <img src="readme-images/2e-deel-pag-1.jpg" width="200px" alt="eerste pagina foto een">

  #### Screenshot(s) van de tweede pagina (small screen):
  Overzicht herenmode
  
  https://www.debijenkorf.nl/herenmode
  
 <img src="readme-images/1e-deel-pag-2.jpg" width="200px" alt="omschrijving van de pagina">
 <img src="readme-images/2e-deel-pag-2.jpg" width="200px" alt="tweede pagina foto twee">
 <img src="readme-images/3e-deel-pag-2.jpg" width="200px" alt="tweede pagina foto twee">
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

Screenreader

De site is te bedienen met een screenreader, ik kon in principe alle menu's doort zonder al te grote problemen. Wel zijn er een paar punten van kritiek voor de site. Als je het menu afgaat en je komt langs de zoekbalk dan word deze automatisch opengeklapt, dit leidde er bij mij in een van de tests toe dat ik niet verder kwam. Later lukte het mij wel om hierlangs te navigeren. Daarnaast hebben sommige afbeeldingen geen correcte namen, bij het scrollen over de homepagina kwam ik bijvoorbeeld langs een afbeelding die werd opgelezen als "570x450-50.34377387318559x44.85530546623794, afbeelding", dit is natuurlijk niet de bedoeling en belemmerd mensen met een screenreader enorm. Op deze twee punten na is het mij verder gelukt om de site door te navigeren zonder problemen te ondervinden.
<br>
<br>
  
WCAG

Website: debijenkorf.nl 

Naam: Mick van den Boom

Test: 1

Content
1. Duidelijk taalgebruik
2. Unieke beschrijving knoppen

Opmerkingen content
1. Goede omschrijvingen van producten en andere onderdelen. Net verwoord maar niet te ingewikkeld. Op de homepagina staat bij het deel van de wintercollectie de tekst “Pak dit seizoen groots uit met wollen winteritems die jouw unieke stijl weerspiegelen”, deze tekst kan natuurlijk duidelijker maar hier is bewust voor gekozen omdat de bijenkorf een wat duurdere en exclusievere sfeer af wilt geven door wat duurdere en lastigere woorden te gebruiken.
2. Het spreekt bij een kledingwinkel voor zich wat je kiest als je op mannen of vrouwen klikt. Toch zijn deze knoppen redelijk kortaf aangezien ze niet een duidelijk make wat je gaat zien. Als ik verder naar beneden scroll kom ik aan bij het onderdeel met de FAQ, bestellingen volgen en hulp vragen. Dit deel is duidelijker. De knoppen hier zeggen dingen zoals “bekijk veelgestelde vragen” en “volg je bestelling”. De knoppen op de site verschillen dus, een deel is te direct en een deel is duidelijk.
<br>
<br>

Global code
1. Valideer uw html
2. Gebruik een lang-attribuut op het html element
3. Geef elke pagina een unieke titel
4. Zorg ervoor dat viewport-zoom niet is uitgeschakeld

Opmerkingen global code 
1. De code is lastig te valideren, als ik dit doe op de W3C site dan krijg ik een 403 forbidden error. Ik heb vervolgens zelf elementen van de code in VSC geplakt waaruit bleek dat de site zeker wat errors bevat. Ondanks de normale functionaliteit op het eerste blik kan dit natuurlijk leiden tot problemen.
2. Er is gebruikt gemaakt van het lang attribuut, de taal is ingesteld op NL-NL.
3. Iedere pagina bevat een andere titel, als ik op de homepagina de titel bekijk staat er “de Bijenkorf • Mode, Cosmetica & Interieur • Snel in huis”. Als ik vervolgens naar de pagina ga met herenmode veranderd de titel naar “Herenmode • de Bijenkorf • Gratis retourneren”.
4. De viewport is uitgeschakeld, het is onmogelijk om op mijn telefoon in te zoomen op de site. Op laptop kan dit wel maar het hoort op telefoon uiteraard ook te werken.
<br>
<br>

Toetsenbord
1. Zorg voor een duidelijke stijl bij interactieve elementen waarnaar wordt genavigeerd
2. Zorg ervoor dat de focus volgorde overeenkomt met de beeld indeling.

Opmerkingen toetsenbord
1. De geselecteerde elementen worden duidelijk geselecteerd, tijdens het navigeren is het dus duidelijk te zien waar je je begeeft. Het enige opvallende tijdens het navigeren is dat ik vast kwam te zitten toen ik langs de zoekbalk kwam, hierna kan ik niet verder door tab te gebruiken.
2. De focus volgorde is logisch, iedere keer voordat ik op tab klik kan ik al voorspellen welk element als volgende geselecteerd zal gaan worden.
<br>
<br>

Mobiel en aanraking
1. Bekijk of de site gedraaid kan worden
2. Verwijder horizontaal scrollen
3. Zorg ervoor dat knoppen en links makkelijk gebruikt kunnen worden (grootte en positie)
4. Zorg voor genoeg witruimte tussen interactieve elementen voor scroll ruimte

Opmerkingen mobiel en aanraking 
1. De site kan iedere mogelijke kant op gedraaid worden.
2. Het grootste deel van de site bevat geen mogelijkheid om horizontaal te scrollen dus dit is goed. De enige onderdelen waar je horizontaal kan scrollen zijn de overzichten van kleding waar je bijvoorbeeld kan scrollen door recent bekeken of aanbevolen voor jou.
3. Alle knoppen en links zijn van goede grootte waardoor de site dus goed toegankelijk is op mobiel.
4. Over het algemeen bevat de site genoeg witruimte, het enige onderdeel waar hier geen sprake van is is bij het begin van iedere pagina waar je moet kiezen tussen de verschillende kleding opties. (Bijvoorbeeld op het homescherm de opties man, vrouw, kinderen, etc), deze vlakken staan te dicht op elkaar en deze sectie bevat nauwelijks witruimte.
<br>
<br>

Headings
1. Gebruik header elementen om nieuwe content te introduceren
2. Gebruik maar één h1 element per pagina
3. Header elementen moeten in een logische volgorde worden geschreven
4. Sla geen heading levels over

Opmerkingen headings
1. Ieder nieuwe element bevat een header, hier is dus goed over nagedacht.
2. De website maakt gebruik van maar één h1 element per pagina.
3. De opbouw van de h1, h2 en h3 elementen die de site bevat zijn logisch verdeelt en zorgen voor een goede structuur.
4. De site maakt gebruik van h1, h2 en h3 headings, er word dus niks overgeslagen.
<br>
<br>

Lists
1. Maak gebruik van de elementen ol, ul en dl voor content die in een lijst hoort

Opmerkingen lists
1. De site maakt zeker gebruik van lists. Door te inspecteren heb ik gevonden dat bijvoorbeeld bij de footer gebruik word gemaakt van een unordered list.
<br>
<br>

Images
1. Zorg ervoor dat alle img elementen een alt attribuut hebben
2. Zorg ervoor dat alle decoratieve img een null alt attribuut hebben
3. Bied een tekst alternatief voor grote img zoals grafieken en kaarten
4. Voor een img met tekst, zorg ervoor dat de alt omschrijving de tekst bevat

Opmerkingen images
1.  Er word goed gebruik gemaakt van alt attributen, als ik bijvoorbeeld bij de detailpagina van een t shirt naar de alt tekst van de foto ga kijken staat er "Tommy Hilfiger - Vintage T-shirt met logo- en backprint - Camel”.
2. Op de site word nauwelijks gebruik gemaakt van decoratieve foto’s, de enige foto die ik kon bedenken was de foto van het logo bovenaan de pagina. Nadat ik deze heb opgezocht in de code kon ik geen alt tekst vinden bij deze foto.
3. Ik heb op de site geen foto’s van mappen of grafieken kunnen vinden. Als deze er wel zouden zijn ga ik ervan uit dat deze ook een alt tekst zouden hebben aangezien de rest dit ook heeft.
4. De foto’s met tekst erin bevatten geen alt tekst die ook de tekst op de foto omschrijft. Deze tekst wordt apart in de code geschreven.
<br>
<br>

Media (video and audio)
1. Zorg ervoor dat media niet automatisch afspeelt
2. Zorg ervoor dat alle media gepauzeerd kan worden
3. Zorg voor ondertiteling bij video’s
4. Zorg voor transcripties bij geluid

Opmerkingen media (video en audio)
1. Op de homepagina bevindt zich meteen een video of gif die automatisch afspeelt.
2. De video op het homescherm kan niet gepauzeerd worden.
3. De video heeft geen ondertiteling maar bevat ook geen geluid.
4. De website bevat geen audio mogelijkheden en dus ook geen transcriptie.
<br>
<br>

Controls
1. Gebruik een a element voor links
2. Zorg ervoor dat links herkenbaar zijn als links
3. Zorg ervoor dat controls de staat :focus hebben
4. Gebruik het button element voor knoppen
5. Zorg voor een skip link en zorg dat deze zichtbaar is wanneer gefocust
6. Identificeer links die geopend worden in een nieuwe tab of venster worden geopend.

Opmerkingen controls
1. Na de code de inspecteren heb ik gevonden dat de links inderdaad met een a element gecodeerd zijn.
2. Alle links zijn duidelijk te herkennen door middel van de streep onder de tekst.
3. Er is geen control focus.
4. Voor de knoppen op de site wordt geen gebruik gemaakt van het button attribuut. Ook de knoppen worden gecodeerd met een a element.
5. Er is geen gebruik gemaakt van een skip link.
6. De links die naar een andere tab gaan maken wel duidelijk dat je naar een andere pagina gaat. Bijvoorbeeld bij het bekijken van de locatie van het filiaal in Amsterdam staat de knop “bekijk in Google Maps”, het spreekt dan voor zich dat je een nieuwe tab opent.
<br>
<br>

Apprearance
1. Kijk of light- en dark mode worden ondersteund
2. Bekijk of de hoge contrast modus wordt ondersteund
3. Zet de tekst grootte op 200%
4. Zorg ervoor dat informatie niet alleen wordt overgebracht via kleur

Opmerkingen appearance
1. Nadat ik mijn voorkeur op google chrome op dark mode heb gezet blijft de pagina van de bijenkorf spierwit.
2. Dit heb ik helaas niet kunnen testen omdat ik deze modus niet werkend heb gekregen.
3. De tekstgrootte is aan te passen, alleen zorgt dit er wel voor dat sommige onderdelen van de site in elkaar vallen.
4. Informatie wordt niet overgebracht via kleur, dit wordt voornamelijk gedaan door middel van verschillende lettergrootten.
<br>
<br>

Animation
1. Zorg ervoor dat animaties subtiel zijn en niet te druk
2. Zorg voor een mechanisme om achtergrond videos te pauzeren
3. Zorg ervoor dat alle animaties voldoen aan mediaquery voorkeur reduced motion

Opmerkingen animation
1. De animatie op het homescherm is erg groot en druk.
2. De animatie op het homescherm is niet te pauzeren.
3. Er is geen sprake van reduced motion
<br>
<br>

Color contrast
1. Bekijk het contrast voor alle normale teksten
2. Bekijk het contrast voor alle grote teksten
3. Bekijk het contrast voor alle iconen
4. Bekijk tekst die fotos of videos overlapt
5. Bekijk aangepaste selectie kleuren

Opmerkingen color contrast
1. Alle normale teksten zijn gemakkelijk te lezen aangezien ze allemaal zwart zijn op een witte achtergrond.
2. Alle grote teksten zijn ook makkelijk te zien aangezien de tekst zwart is en de achtergrond wit.
3. Alle iconen zijn goed te zien aangezien ze net zoals de tekst op een witte achtergrond staan.
4. De tekst is te lezen maar niet altijd even duidelijk. In sommige gevallen draagt de persoon op de afbeelding bijvoorbeeld witte kleding waardoor de witte tekst niet meer zo goed is te lezen door het slechte contrast.
5. Er is gebruik gemaakt van een standaard selectie kleur.
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown-schets-1.png" width="400px" alt="breakdown van de eerste pagina">
  <br>
  <img src="readme-images/breakdown-schets-2.png" width="400px" alt="breakdown van de tweede pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdown-schets-menu.png" width="375px" alt="breakdown van menu">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb een begin gemaakt aan mijn html, ik heb geprobeerd om alle elementen van de heren pagina alvast erin te zetten. Ook heb ik de breakdown schetsen gemaakt.

  ### Verslag van meeting
  Mijn html was nog niet perfect, zo had ik nog geen gebruik gemaakt van sections en waren sommige elementen niet juist of verkeerd om geplaatst.

  - Maak sections aan, alles staat nu in 1 lange lijst
  - Let goed op het verschil tussen knoppen en links
  - Zet de images pas na de h1/2/3 en p, dit is beter voor de screenreader.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb een begin gemaakt aan de css van mijn eerste pagina, ik ben al goed op weg alleen loop ik tegen een paar problemen aan waar ik vragen over ga stellen. De volgende vragen heb ik alvast gemaakt:
  - Ik heb meerdere errors, onder andere met het translate element, wat moet ik hiermee doen
  - Sommige foto's van de officiële site krijg ik niet gedownload, hoe doe ik dit het makkelijkst?
  - Hoe plaats ik al mijn elementen op de juiste manier in een carousel die producten weergeeft? Flexbox of grid? En hoe krijg ik allesin 1 rij?
  - Hoe kan ik mijn zoekbalk stylen? Ik kan hem niet selecteren in css.
  - Ik wil in mijn footer bij details alleen de eerste selecteren, hoe doe ik dat?

  ### Verslag van meeting
  Ik heb op al mijn vragen antwoord gekregen, ik kreeg te horen dat ik goed op weg ben met mijn code en dat ik niet moet vergeten om de readme bij te houden. Dit zijn de antwoorden op de vragen die ik heb gesteld (op volgorde):

  - Css is waarschijnlijk niet helemaal geupdate, het element translate werkt dus dit is gewoon goed.
  - Door te inspecten kan je meestal je muis op de link houden en dan verschijnt een andere link waar je op kan klikken.
  - Maak eeen unordered list en maak ieder product een listed item, vervolgens kan je deze UL in een row zetten met flexbox.
  - Verander als eerst even input type naar search ipv text, vervolgens kan je in css input[type="search"] gebruiken.
  - Gebruik footer details:first-of-type summary.

Extra feedback:
- Voor je hamburger menu in menu kan je in je LI weer een nieuwe UL aanmaken
- Gebruik vw en vh voor een goede responsive site

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

WCAG
Website: mickvdboom.github.io/blok2WEB/
Naam: Mick van den Boom
Test: 2

Content
1. Duidelijk taalgebruik
2. Unieke beschrijving knoppen

Opmerkingen content
1. Ik heb bijna alle elementen hetzelfde genoemd, ik heb alleen een paar kleine foutjes opgelost. De officiële website maakte namelijk onregelmatig gebruik van hoofdletters, ik heb dit overal toegepast.
2. Ik heb de tekst in de knoppen hetzelfde gelaten, ondanks dat de tekst soms wat kortaf is denk ik dat het niet beter kan.


Global code
1. Valideer uw html
2. Gebruik een lang-attribuut op het html element
3. Geef elke pagina een unieke titel
4. Zorg ervoor dat viewport-zoom niet is uitgeschakeld

Opmerkingen global code 
1. De code bevat geen errors, ik heb alleen 3 info’s als ik hem valideer.
2. Ik heb de website ingesteld op Nederlands met een lang attribuut
3. Ik heb net zoals de officiële site iedere pagina een unieke titel gegeven die duidelijk maakt waar de bewust pagina over gaat
4. Op telefoon kan ik inzoomen op mijn website, dit is dus een verbetering vergeleken met de officiële site.

Toetsenbord
1. Zorg voor een duidelijke stijl bij interactieve elementen waarnaar wordt genavigeerd
2. Zorg ervoor dat de focus volgorde overeenkomt met de beeld indeling.

Opmerkingen toetsenbord
1. Het is duidelijk welk element geselecteerd is.
2. De focus volgorde loopt overeen met de pagina zelf, ook pakt de focus eerst de tekst voor de fotos. Het enige probleem is dat de focus ook mijn navigatie doorloopt zelfs als deze gesloten is.

Mobiel en aanraking
1. Bekijk of de site gedraaid kan worden
2. Verwijder horizontaal scrollen
3. Zorg ervoor dat knoppen en links makkelijk gebruikt kunnen worden (grootte en positie)
4. Zorg voor genoeg witruimte tussen interactieve elementen voor scroll ruimte

Opmerkingen mobiel en aanraking 
1. De site kan alle kanten op gedraaid worden en blijft functioneel.
2. Op mijn hele site is horizontaal scrollen niet mogelijk, behalve bij de elementen waar dit hoort zoals carousels met kleding.
3. Alle knoppen en links zijn duidelijk klikbaar en groot genoeg.
4. Tussen de meeste elementen is genoeg witruimte overgelaten om je vinger te plaatsen.

Headings
1. Gebruik header elementen om nieuwe content te introduceren
2. Gebruik maar één h1 element per pagina
3. Header elementen moeten in een logische volgorde worden geschreven
4. Sla geen heading levels over

Opmerkingen headings
1. Ik heb bij alle nieuw beginnende items een header element gebruikt.
2. Ik heb op allebei mijn pagina’s maar 1 h1 tag.
3. Ik heb mijn best gedaan om een zo logisch mogelijke volgorde aan te brengen in mijn code, of dit helemaal klopt durf ik nog niet met zekerheid te zeggen.
4. Ik heb gebruik gemaakt van h1, h2 en h3 headings, er word dus niks overgeslagen.

Lists
1. Maak gebruik van de elementen ol, ul en dl voor content die in een lijst hoort

Opmerkingen lists
1. Ik heb over mijn site regelmatig gebruik gemaakt van een unordered list.

Images
1. Zorg ervoor dat alle img elementen een alt attribuut hebben
2. Zorg ervoor dat alle decoratieve img een null alt attribuut hebben
3. Bied een tekst alternatief voor grote img zoals grafieken en kaarten
4. Voor een img met tekst, zorg ervoor dat de alt omschrijving de tekst bevat

Opmerkingen images
1.  Iedere foto bevat een alt tag
2. Mijn site maakt nauwelijks gebruik van decoratieve foto’s dus hier is geen sprake van.
3. De site bevat geen grafieken of kaarten dus hier is geen sprake van.
4. De alt omschrijving van de foto bevat de tekst die ook op de afbeelding staat.

Media (video and audio)
1. Zorg ervoor dat media niet automatisch afspeelt
2. Zorg ervoor dat alle media gepauzeerd kan worden
3. Zorg voor ondertiteling bij video’s
4. Zorg voor transcripties bij geluid

Opmerkingen media (video en audio)
1. Op de paginas die ik heb gemaakt bevinden zich geen videos of geluidsfragmenten dus hier is geen sprake ban.
2. Geen sprake van.
3. Geen sprake van.
4. Geen sprake van.

Controls
1. Gebruik een a element voor links
2. Zorg ervoor dat links herkenbaar zijn als links
3. Zorg ervoor dat controls de staat :focus hebben
4. Gebruik het button element voor knoppen
5. Zorg voor een skip link en zorg dat deze zichtbaar is wanneer gefocust
6. Identificeer links die geopend worden in een nieuwe tab of venster worden geopend.

Opmerkingen controls
1. Alle links bevatten een a element
2. Alle links zijn op een manier vormgegeven dat het voor zich spreekt dat je hierop kunt klikken.
3. Ik heb geen gebruik gemaakt van :focus states.
4. Al mijn knoppen bevatten een button element.
5. Ik heb geen gebruik gemaakt van een skip link.
6. Bij de links die naar een andere pagina leiden spreekt dit redelijk voor zich.

Apprearance
1. Kijk of light- en dark mode worden ondersteund
2. Bekijk of de hoge contrast modus wordt ondersteund
3. Zet de tekst grootte op 200%
4. Zorg ervoor dat informatie niet alleen wordt overgebracht via kleur

Opmerkingen appearance
1. Ik heb een light en dark mode gemaakt. Dit heeft de officiële site niet.
2. Ik heb geen ondersteuning voor hoge contrast modus.
3. Door de lettergrootte in de instellingen van chrome aan te passen veranderd dit de grootte van alle teksten op mijn site.
4. Informatie wordt niet overgebracht via kleur, dit wordt voornamelijk gedaan door middel van verschillende lettergrootten.

Animation
1. Zorg ervoor dat animaties subtiel zijn en niet te druk
2. Zorg voor een mechanisme om achtergrond videos te pauzeren
3. Zorg ervoor dat alle animaties voldoen aan mediaquery voorkeur reduced motion

Opmerkingen animation
1. Mijn pagina’s bevatten geen animaties.
2. Mijn pagina’s bevatten geen animaties.
3. Geen sprake van.

Color contrast
1. Bekijk het contrast voor alle normale teksten
2. Bekijk het contrast voor alle grote teksten
3. Bekijk het contrast voor alle iconen
4. Bekijk tekst die fotos of videos overlapt
5. Bekijk aangepaste selectie kleuren

Opmerkingen color contrast
1. Alle tekst is zwart op een witte achtergrond en in darkmodus is dit omgekeerd.
2. Voor de grote teksten geld hetzelfde als de normale.
3. Alle iconen zijn goed zichtbaar.
4. De meeste tekst is goed te lezen, sommige letters worden alleen iets minder goed zichtbaar vanwege de achtergrond.
5. Mijn site bevat standaard selectiekleuren.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
Mijn code is al heel ver op weg, ik heb alles wat is gelukt van pagina 1 en 2 al af. Het enige waar ik momenteel nog problemen mee heb is met de foto's van het product op mijn productpagina. Als ik deze responsive wil maken moet ik 3 verschillende states maken. Bij de telefoon state staan de foto's met knoppen boven de omschrijving, bij smal laptop formaat staan de foto's met knoppen naast de omschrijving en bij breed laptop formaat staan de foto's allemaal weergegeven zonder knoppen met de omschrijving ernaast. Dit is mij nog niet gelukt aangezien ik met de media query mijn code overschrijf doordat ik meerdere dingen heb met een mid-width.

  ### Verslag van meeting
Tijdens het gesprek heb ik geleerd dat ik een media query zowel een min-width als een max-width kan geven tegelijkertijd. Ik heb vervolgens in mijn code 3 verschillende states gemaakt, een code met een max-width van 600px, een code tussen de 600px en 1100px en een code vanaf 1100px.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/eindresultaat-herenpagina.png" width="375px" alt="uitomst opdracht 1">
  <img src="readme-images/eindresultaat-productpagina.png" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  <img src="readme-images/goed-voorbeeld1.png" width="375px" alt="top">
  
  <br>
  <img src="readme-images/goed-voorbeeld2.png" width="375px" alt="top">
  
  <br>
  <img src="readme-images/goed-voorbeeld3.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
<img src="readme-images/slecht-voorbeeld1.png" width="375px" alt="top">
<img src="readme-images/slecht-voorbeeld2.png" width="375px" alt="top">

</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. https://codepen.io/shooft/pen/ZEpXmrg
  2. https://www.w3schools.com/howto/howto_css_image_text.asp
  3. https://www.w3schools.com/howto/howto_css_sticky_element.asp
  4. https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/
  5. https://codepen.io/shooft/pen/VwJXNEg
  6. Ivo's geweldige uitleg

</details>
