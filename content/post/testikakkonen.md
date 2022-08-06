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

Tässä julkaisussa käsitellään tämän verkkosivun taustalla olevaa prosessia, joka on tietysti kokoajan kesken. Ehkä saat tästä inspiraatiota oman projektin luomiseen, tosin tuskin tämä kirjoitus kovin montaa ihmistä kiinnostaa. Oikea syy tämän kirjoituksen taustalla on selventää luomisprosesin kulkua, dokumentoida sen eri vaiheita ja harjoitella alustan toimintoja. 

## Miksi?

Taustalla on jo pitkään jatkunut halu tehdä jotain tietoteknistä näpertämistä, sillä kiinnostusta löytyy, mutta päämäärää ei. Työelämään astuessa tuli vastaan aito tarve luoda omia verkkotehtäviä, josta tämä projekti on saanut alkunsa. Lopulta syntyi tämä sivu jolla nyt olet, jossa on tarkoitus tehtävien lisäksi julkaista myös esimerkiksi teoriaosuuksia ja vinkkejä esimerkiksi ylioppilaskirjoituksiin valmistautuville kokeilaille tai muuta englantiin tai kieliin ylipäänsä liittyvää hyödyllistä tai vähemmän hyödyllistä sisältöä. Tärkein syy kuitenkin taustalla on omat kiinnostuksen kohteet, minkä takia monen mielestä tuo vähemmän hyödyllistä saattaa olla enemmän esillä. Ensimmäisenä olemassaolovuotena ajankäyttö on ollut 95% koodin kanssa kamppailemista eli ongelmanratkontaa ja loput 5% sisällöntuottamista eli työntekoa, mikä selittää sisällön puutteen. Toivottavasti jatkossa kun käyttöliittymään voi olla tyytyväinen ja koodi kulkee tuntuu sisällöntuottaminen myös mielekkäältä. Loppujen lopuksi tämäkin sivu on tehty 95% itseäni ja 5% teitä lukijoita varten, mikäli teitä edes on. 

## Koodaustausta

Yläaste-lukioikäisenä tein nettisivut muistaakseni Microsoft Frontpagen avulla. Sivut laitettiin jollekkin ilmaispalvelimelle ja perään tietty .tk-domain. Sivustoja kertyi vuosien mittaan useita, mutta sisältöä ei ollut juurikaan. Ainakin yhdellä sivulla oli musta tausta, ja itse sivu toimi inline-framen avulla. Nykyistä sivua luodessa sain selville, että inline-framet olivat olleet vanhanaikaista koodia jo vuosikymmenen, joten hyväksi koettu ulkoasua sai vaihtua. Koodaustaustaa siis oli, mutta lähes olemattomasti. HTML ja CSS oli sillä tasolla että osasin hyvin lukea sitä, mutta tuottaminen vaati apukeinoja, sama siis kuin saksan kieli osaamiseni. Javascript-osaaminen käytännössä nolla, tosin nyt jo tasoa 1/5. 

## Alkuvaiheet

idea sivusta oli hautunut päässä jo hetken, mutta alkoi konkretisoitua uudenvuodenaaton aikoihin vuoden 2020 vaihtuessa vuoteen 2021, paikkana Utajärveläinen sauna. Kysyin koodausta työksi tekevältä ystävältä millä koodikielillä yksinkertaiset verkkokielioppitehtävät kannattaisi toteuttaa, ja vastaus oli HTML ja Javascript. Rehellisesti sanottuna odotin jotain hienompaa, mutta eipä niitä muita tarvita (paitsi tietysti CSS). Kotiin päästyäni latasin [Notepad++](https://notepad-plus-plus.org/), jolla koodia osaavat tekivät nettisivuja joskus aikoinaan. Palvelimeksi valikoitui [GitHub Pages](https://pages.github.com/), joka on alustana tälläkin hetkellä (tilanne v. 2022). 

Tarkoituksena oli luoda monivalintatehtäväketju, jossa piti valita annettuun kysymykseen oikea verbimuoto. Mikäli vastasit kysymykseen oikein, pääsit seuraavaan kysymykseen. Mikäli vastasit väärin, jouduit alottamaan alusta. Se, miksi tällainen tehtävä oli luotava oli se, että yläkoulun oppimateriaaleissa (SanomaPron On the Go) oli tarjolla ihan järkyttävän huono määrä kielioppimateriaalia. Tarvetta oli yksinkertaisille behavioristisille tehtäville, joissa oppilas laittaa 30 verbin perään s-päätteen mikäli verbi sen vaatii. Virheen jälkeen palattiin takaisin alkuun koska muuten keskittymiskyvyttömät vaan arvailisi ne sinne ajattelematta yhtään enempää. Ja koska jotkut silti vastailisivat ajattelematta yhtään sen enempää, joku ehkä alintajuntaisesti oppisi jotain kun painelisi ne verbit sinne tarpeeksi monta kertaa. 

Koska Javascript-osaaminen oli nollassa, piti päätyä Googlen apuun. Googlesta löytyi nopea ohjeistus siitä miten tehdään Javascriptillä monivaiheinen monivalintehtävä, joten kopioin sen ja aloin muokkaamaan. Muokkaamisessa korvaamaton apu oli [jsfiddle](https://jsfiddle.net/). Rehellisesti sanottuna tein tuota ensimmäistä tehtävää noin yhdeksän tuntia, ja seuraavana päivänä saman verran kun korjasin virheet ja loin sen ympärille ulkoasun. Valmista tehtävää ja kaunista ulkoasua tuli ihasteltua pitkään, vaikka myöhemmin koko ulkoasu heitettiin menemään koska oli ruma ja epäkäytännöllinen ja Javascriptissä oli ihan naurettavia epäloogisuuksia jälkeenpäin tarkasteltua. Alla kuva jsfiddlen taulukosta jossain vaiheessa prosessia.

{{< img src="/img/taustat/ensimmainen_tehtava.jpg" alt="Kuvakaappaus jsfiddlestä" >}}
