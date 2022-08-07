+++
author = "PJMM"
title = "Verkkosivun taustaa"
date = "2022-08-05"
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

Tässä julkaisussa käsitellään tämän verkkosivun taustalla olevaa prosessia, joka on tietysti kokoajan kesken. Ehkä saat tästä inspiraatiota oman projektin luomiseen, tosin tuskin tämä kovin montaa ihmistä kiinnostaa. Oikeasti kirjoitan tätä koska harjoittelen alustan toimintoja ja formaatteja ja pääsen käymään läpi sivuston eri vaiheita.

## Miksi?

Taustalla on jo pitkään jatkunut halu tehdä jotain hyödyllistä tietoteknistä projektia, sillä kiinnostusta löytyy, mutta päämäärää ei. Töissä tuli vastaan aito tarve luoda omia verkkotehtäviä, jonka takia tämä projekti sai alkunsa. Lopulta syntyi tämä sivu. Tärkein syy kuitenkin on päästä viettämään aikaa omien kiinnostuksen kohteiden kanssa, minkä takia kaikki sisältö täällä ei välttämättä ole lukijan mielestä kovin hyödyllistä. Tämä sivu on tehty 95% itseäni varten, ja loput 5% teitä lukijoita varten, jos teitä edes on.

## Koodaustausta

Yläaste-lukioikäisenä tein nettisivut muistaakseni Microsoft Frontpagen avulla. Sivut laitettiin jollekkin ilmaispalvelimelle ja perään tietty .tk-domain. Sivustoja kertyi vuosien mittaan useita, mutta sisältöä ei ollut juurikaan. Ainakin yhdellä sivulla oli musta tausta, ja itse sivu toimi inline-framen avulla. Nykyistä sivua luodessa sain selville, että inline-framet ovat olleet vanhanaikaista koodia jo yli kymmenen vuotta, joten hyväksi koettu ulkoasu piti hylätä. Koodaustaustaa siis oli, mutta lähes olemattomasti. HTML ja CSS oli sillä tasolla että osasin hyvin lukea sitä, mutta tuottaminen vaati apukeinoja, sama siis kuin saksan kieli osaamiseni. Javascript-osaaminen käytännössä oli tasolla 0/5, nyt jo 1/5 jos pyöristää ylöspäin.

## Alkuvaiheet

idea sivusta oli hautunut päässä jo hetken, mutta alkoi konkretisoitua uudenvuodenaaton aikoihin vuoden 2020 vaihtuessa vuoteen 2021, paikkana Utajärveläinen sauna. Kysyin koodausta työksi tekevältä ystävältä millä koodikielillä yksinkertaiset verkkokielioppitehtävät kannattaisi toteuttaa, ja vastaus oli HTML ja Javascript. Rehellisesti sanottuna odotin jotain hienompaa, mutta eipä niitä muita tarvita (paitsi tietysti CSS). Kotiin päästyäni latasin [Notepad++](https://notepad-plus-plus.org/), jolla koodia osaavat tekivät nettisivuja joskus aikoinaan. Palvelimeksi valikoitui [GitHub Pages](https://pages.github.com/), joka on alustana tälläkin hetkellä (tilanne v. 2022). 

Tarkoituksena oli luoda monivalintatehtäväketju, jossa piti valita annettuun lauseesen oikea verbimuoto. Mikäli vastasit kysymykseen oikein, pääsit seuraavaan kysymykseen. Mikäli vastasit väärin, jouduit alottamaan koko homman alusta. Se, miksi tällainen tehtävä oli luotava oli se, että yläkoulun oppimateriaaleissa (SanomaPron On the Go) oli tarjolla huono määrä kielioppimateriaalia. Tarvetta oli yksinkertaisille behavioristisille tehtäville, joissa oppilas laittaa 30 verbin perään s-päätteen mikäli verbi sen vaatii. Virheen jälkeen palattiin takaisin alkuun koska muuten keskittymiskyvyttömät vaan arvailisi ne sinne ajattelematta yhtään enempää. Ja koska jotkut silti vastailisivat ajattelematta yhtään sen enempää, joku ehkä alintajuntaisesti oppisi jotain kun painelisi ne verbit sinne tarpeeksi monta kertaa. 

Koska Javascript-osaaminen oli nollassa, piti googlettaa. Googlesta löytyi nopea ohjeistus siitä miten tehdään Javascriptillä monivaiheinen monivalintehtävä, joten kopioin sen ja aloin muokkaamaan. Muokkaamisessa apun toimi [jsfiddle](https://jsfiddle.net/), jossa voit pyörittää HTML, JS ja CSS reaaliajassa. Rehellisesti sanottuna tein tuota ensimmäistä tehtävää noin yhdeksän tuntia, ja seuraavana päivänä saman verran kun korjasin virheet ja loin sen ympärille ulkoasun. Valmista tehtävää ja kaunista ulkoasua tuli ihasteltua pitkään, vaikka myöhemmin koko ulkoasu heitettiin menemään koska oli ruma ja epäkäytännöllinen ja Javascriptissä osa kohdista oli ihan järjettömiä. Alla kuva jsfiddlen taulukosta jossain vaiheessa prosessia.

![Kuvakaappaus jsfiddlestä](/img/taustat/ensimmainen_tehtava.jpg)



