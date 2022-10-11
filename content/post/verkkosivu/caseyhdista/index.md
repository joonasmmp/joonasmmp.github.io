+++
author = "PJMM"
title = "Case paritustehtävä"
date = "2022-09-11"
type = "post"
tags = [
    "verkkosivu",
    "offtopic",
    "koodaus",
    "tietotekniikka",
    ]
categories = [
    "Verkkosivu",
]
+++

Kysyin kollegaltani Markulta (nimi ei muutettu) millaisia verkkotehtäviä hän haluaisi. Hän sanoi haluavansa tehtävän, jossa sanastosta arvotaan määrä n sanoja ja niille täytyy etsiä pari. Kun paritus on valmis, on valmiina sanasto jossa toisella puolella englanninkielinen versio ja toisella puolella suomenkielinen. Lupasin hoitaa asian. 

## Tausta

Koska en osaa koodata, etsin ohjeen kuinka luoda muistipeli. Siinähän on käytännössä sama idea. Korttien sijasta laitoin kaksi riviä vastakkaisille puolille ja muutin kortit suorakulmioiksi. Indeksissä kaksi arvoa (sana suomeksi ja englanniksi) ja ne on paritettu toisiinsa. Idea on hyvin yksinkertainen: painat kahta näppäintä ja jos ne ovat pari, jotain tapahtuu. Jos ei niin homma nollaantuu. Easy money.

## Ensimmäinen yritys

{{< rawhtml >}}
  <iframe src="yritys1.html" style="width:100%;height:450px"></iframe>
{{< /rawhtml >}}
Ja siinähän se seisoo, mutta mikäli jaksat klikkailla, huomaat että järjestys menee ihan miten sattuu. Alkuperäisessä muistipelissä siis korttien paikka ei vaihdu, mutta arvotaan jokaisen sivulatauksen alussa koodilla:

```javascript
function randomSort(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
```

Eli siis alkuperäiset indeksinumerot arvotaan uusiksi. Tällöin ne menevät uuden indeksinumeron mukaiseen järjestykseen. Luulin, että laittamalla CSS-koodin weight: 1 homma onnistuu, kun menevät värin muuttuessa listan pohjalle, mutta uusien sanojen pudotessa pohjalle sanat palauttavat alkuperäisen arvotun järjestyksensä.

## Toinen yritys

{{< rawhtml >}}
  <iframe src="yritys2.html" style="width:100%;height:450px"></iframe>
{{< /rawhtml >}}

Ja siinähän se taas seisoo. Aiempi ongelma korjattiin helpolla muutoksella, tosin kyseessä oli vasta noin kymmenes muutosyritys eli kokeilin vaikka ja mitä ennen kuin sain toimimaan koska en edelleenkään osaa koodata. Pakkomielteisesti yritin ratkaista ongelman palauttamalla alkuperäiset indeksinumerot parin löytymisen jälkeen. Ongelma kuitenkin ratkaistiin luomalla uusi muuttuja 

```javascript
var numero = 0 
```

Parin löytyessä kyseinen muuttuja nousee yhdellä Ja kummankin puolen sanoihin lisätään css-muutoksen yhteydessä järjestysnumero muuttujan mukaan

```javascript
      if (isMatch(selectedTerm, selectedDef)) {
		.className = "score";
        def.className = "score";
  			numero++;
   			term.style.order = (numero);
   			def.style.order = (numero);
      }
```

Joten tehtävä on valmis. Vai onko? Markku toivoi, mikäli oikein ymmärsin, että sanat arvottaisiin suuremmasta sanastosta. Ja se olisi tietty myös opettajalle helpompi, kun ei tarvitsisi näperrellä usean tehtävän kanssa. Joten mitä jos indeksiin lisää uusia sanoja, ja laittaa tehtävän arpomaan vain osan indeksin sanoista tehtävän alussa?

## Kolmas yritys

{{< rawhtml >}}
  <iframe src="yritys3.html" style="width:100%;height:450px"></iframe>
{{< /rawhtml >}}

Tässä tällä hetkellä viimeinen versio tehtävästä. Kuten aiemmin mainitsin, indeksiin on syötetty 8 sanaparia ja ohjeistettu syöttämään 6 termiä kummallekkin puolelle. Mikäli olet onnekas, tehtävä toimii sinulle moitteitta, mutta mikäli et, kone arpoo 6 satunnaista termiä oikealle puolella ja 6 satunnaista termiä vasemmalle puolelle välittämättä siitä onko kaikille sanoille pareja. Täytyy siis selvittää miten saisi koodin valitsemaan satunnaisesti 6 paria eikä termiä. Mutta miten? Tuntui mahdottomalta, mutta lopulta sain jostain idean, joka oli toteuttamisen arvoinen.

## Neljäs yritys

{{< rawhtml >}}  
<iframe src="yritys4.html" style="width:100%;height:450px"></iframe>
{{< /rawhtml >}}

Ja siinähän se seisoo. Ongelma oli saada koko joukosta satunnainen määrä sanapareja esiin. En tajunnut millään miten saisin molemmille puolile samat indeksiarvot luotua. Mutta sitten sain sen aiemmin manitun idean: mitä jos molemmille puolille luodaan kaikki sanaparit, mutta ne piilotetaan, ja sivun latauduttua vain tietyt satunnaiset sanaparit näkyvät näytöllä. 

```css
  div#tehtava li[data-index]{
    display: none;
  }
```
Piilottaa kaikki näppäimet. Mutta miten saadaan osa näkyviin? Se tuotti ongelmia, sillä CSS ei tue satunnaisia arvoja, vaan siihen tarvitaan javascript. 

```javascript
for (var a=[],i=0;i<10;++i) a[i]=i;
function shufflee(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
a = shufflee(a);
```
Luo satunnaisen numerosarjan numeroista välillä 0-10 eikä anna tuplia. Tämän jälkeen numerosarja liitetään yksi kerrallaan CSS-sääntöihin, mikä tarkoittaa sitä, että mikäli ensimmäinen numero on 4, niin sanapari, joka omaa indeksiarvon 4, ilmestyy näkyviin molemmilla puolilla. Tämä sitten toistetaan haluttu määrä kertoja, tarkemmin ottaen 6. 

```javascript
  function shuffle() {
    randomSort(data.terms)
    randomSort(data.definitions)
    createListHTML(data.terms, termsContainer)
    createListHTML(data.definitions, defsContainer)
		addCSS("div#tehtava li[data-index='" + a[1] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[2] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[3] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[4] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[5] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[6] + "']{display: flex;}")
  }
```
  Ratkaisunahan tämä on todennäköisesti aivan hirveä. Mutta taas kerran painotan sitä, että en osaa koodata, varsinkaan javascriptiä. Seuraava ratkaistava ongelma on näppäimet joiden avulla sanaparien määrää hallitaan, eli voi halutessaan tehdä tehtävän kuudella, yhdeksällä tai kahdellatoista sanaparilla. Luulisi sen käyvän niinkin yksinkertaisesti kuin lisäämällä yllä olevien koodien määrää a[n], mutta ei tunnu onnistuvan.

## Viides yritys
  {{< rawhtml >}} 
  <iframe src="yritys5.html" style="width:100%;height:800px"></iframe>
  {{< /rawhtml >}}

  Tätä kirjoitusta luodessa ongelmana oli se, että tehtävä toimi moitteettomasti jsfiddlessä, mutta ei tällä sivulla. Pyöritin ratkaisua päässäni noin 12 tuntia kunnes tajusin, että se johtuu siitä, että jostain syystä javascriptin luoma CSS ei jää pysymään. 12 tuntia myöhemmin sitten tajusin, että se johtuu siitä, että juuri tuo aiemmin mainitsemani
```css
  div#tehtava li[data-index]{
    display: none;
  }
```
ajaa sitten lopulta kaiken muun CSS:n päälle. Jsfiddle siis lukee ensin CSS, sitten javascript, kun taas omalla sivulla meni toisin päin. No, ainakin tuli ratkaistua. Aiemmin mainitsemani useamman sanaparin muodostaminen a[n]-tyyliin onnistui myös lopulta, kun lisättiin listan eteen kaiken aiemman pois pyyhkivä 

```javascript
		addCSS("div#tehtava li[data-index]{display: none;}")
```

Nyt(kö) tehtävä on siis valmis? Loppuun voisin heittää sitaatin ystävältäni, Kaijonharjun Kasper Schmeichelinakin tunnetulta Mikke T:ltä, joka kommentoi tapaa jollain sain tehtävän luotua näin:

> En tiiä mikä on oikea tapa tehdä tuo mutta tuo ei kuulosta siltä. 