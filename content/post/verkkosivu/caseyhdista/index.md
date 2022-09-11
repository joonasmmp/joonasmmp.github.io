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
  <iframe src="yritys1.html" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
{{< /rawhtml >}}
Ja siinähän se seisoo. Mutta mikäli jaksat klikkailla, huomaat että järjestys menee ihan miten sattuu. Alkuperäisessä muistipelissä siis korttien paikka ei vaihdu, mutta arvotaan jokaisen sivulatauksen alussa koodilla:

```html
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
  <iframe src="yritys2.html" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
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
