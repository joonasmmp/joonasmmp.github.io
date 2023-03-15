+++
author = "PJMM"
title = "Sivun kuvitus tekoälyn avulla"
date = "2023-03-15"
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

### Taustaa

Moni pitkäaikainen verkkosivujeni seuraaja on huomannut, että sivulle on ilmestynyt kuvia. Ehostin vähän tuota sivun ulkoasua, mutta koska en ole koskaan tyytyväinen mihinkään, niin halusin jotain grafiikkaa. Tarkoituksena on kuitenkin pitää sivu yksinkertaisena ja helppokäyttöisenä, joten aivan kovin isoja CSS-temppuja ei ole tulossa, vaikka Parallax scroll-efekti vähän jo kiinnosti.

No kuitenkin, tuohon etusivulle piti saada banneri johon kuvia. Jotta ulkoasu pysyisi järkevänä Hugon kannalta, sille piti tehdä oma div, jonka vaan laitoin ilmestymään ennen kuin tuo artikkeliosuus alkaa. No, järkevin tapa saada kuva toimimaan järkevästi erillisessä divissä oli laittaa kuva taustakuvaksi, ja divin koko sitten muuttuu kun sivuston koko muuttuu (Tailwindissä on omat breakpointit). Sitten vaan googlasin miten saada Javascript arpomaan mikä kuva siihen tulee, ja vähän muutin sitä niin että kuvan sijasta tuleekin divin CSS-muutos. 

```javascript
    const images = [
    "https://joonasmmp.github.io/img/kansikuvat/etusivu/ph1.jpg",
    "https://joonasmmp.github.io/img/kansikuvat/etusivu/ph2.jpg", 
    "https://joonasmmp.github.io/img/kansikuvat/etusivu/ph3.jpg",
    "https://joonasmmp.github.io/img/kansikuvat/etusivu/ph4.jpg"
    ];
    
    function addCSS(css){
  var elem=document.createElement('style');
  if(elem.styleSheet && !elem.sheet)elem.styleSheet.cssText=css;
  else elem.appendChild(document.createTextNode(css));
  document.getElementsByTagName('head')[0].appendChild(elem); 
}

    document.addEventListener('DOMContentLoaded', _ => {
  [...document.getElementsByClassName('randImg')].forEach(e => {
    const randImageIndex = ~~(Math.random() * images.length);
    addCSS("div#randImg {background: url("+images[randImageIndex]+")}")
  }); 
});
```

Varmaan tuolla tiedostojen nimeämisellä olisi myös saanut saman homman tehtyä niin, että arpoo numeron 1-4 ja lisää sen tuohon phx.jpg väliin, mutta ihan sama. 

### Kuvat

Ajatuksena oli laittaa kuvia (nimeltä mainitsemattomasta) koulusta, jossa työskentelen. Kuulostaa ihan siltä että tätä lukisi joku muukin kuin, no ensinnäkin minä itse, ja toiseksi, oppilaat jotka on vahingossa päätynyt tänne. Päätin kuitenkin, että kuvia pitäisi jollain tapaa muokata. 

Olin jo aiemmin vähän tutustunut [Stable Diffusioniin](https://stability.ai/blog/stable-diffusion-public-release), tosin osaamistaso on aika alhaalla, sillä olin vaan testaillut sen toimivuutta esimerkiksi muokkaamalla omia kuvia ihan vaan läpällä käyttäen apuna img2img-toimintoa. 

Ensiksi päätin vetää ihan vaan käytävältä ottamani kuvan Stable Diffusionin läpi. Tarkoituksena oli saada näyttämään kuva konseptitaiteelta (concept art, en tiedä onko konseptitaide edes oikea suomen kielen sana), mutta siinä onnistumatta. Ehkä pitää vielä värkätä. Päädyin käyttämään [Anything v3](https://huggingface.co/Linaqruf/anything-v3.0)-mallia, koska sillä sai edes jotain tuloksia. Anything v3 on siis tämän hetken suosituin malli animekuvien luomiseen, ja tästä syystä moneen kuvaan ilmestyikin animetyttöjä koulupuvussa. No, käytävältä otettu kuva näyttää tältä:

xxxx

Lisäksi päätin tehdä jokaisella kurssille oman taustakuvan, sillä otsikot oli rumia. Jokaisen kuvan piti jollain tapaa kuvastaa kurssin teemoja, ja olla niin yksinkertainen ja konseptitaidemainen että se toimii taustakuvana. Tähän käytin myös Anything V3, koska tuloksena oli juuri tuo aiemmin mainitsemani tyyli. Tähän käytin myös itse ottamieni kuvien sijasta text2img-toimintoa, jolla tulokset ovat ehdottomasti parempia kuin img2imgilla. 

Ensin oli vuorossa ENA3, aiheena taide, kuten kuvataide ja kirjallisuus. Laitoin siis promptiksi library ja tulos oli tämä: 

![](/img/kansikuvat/kurssivalikot/ena3.jpg)

ENA4 aiheena oli yhteiskunta ja vaikuttaminen, joten eri promptien jälkeen päädyin ihan vaan parliament hall. Kokeilin myös ovaalimallisia kuten Suomessa, mutta tulos ei ollut hyvä, varsinkin kun pitää cropata n. 900x200 pikseliin.

![](/img/kansikuvat/kurssivalikot/ena4.jpg)

ENA5 aiheena on tiede, joten promptiksi science lab with lab equipment and colourful vials. 

![](/img/kansikuvat/kurssivalikot/ena5.jpg)

ENA6, aiheena jatko-opinnot ja työelämä. Promptina university lecture hall.

![](/img/kansikuvat/kurssivalikot/ena6.jpg)


ENA7, aiheena ympäristö ja kestävä elämäntapa. Tästä tuli todella hieno kuva, joka valitettavasti ei mahdu kokonaisuutena. Promptiksi laitoin waterfall in the middle of a forest with rabbits and deer. 

![](/img/kansikuvat/kurssivalikot/ena7.jpg)


ENA8, puhekurssi, sai promptiksi dozens of students working on oral exams. Tässä tarkoituksena oli saada luokkahuone täynnä opiskelijoita, joten pelkkä students working on oral exams sai tulokseksi kaksi (isorintaista) animetyttöä koulupuvuissa. Lisäämällä dozens alkuun korjasi tilanteen, onneksi. 

![](/img/kansikuvat/kurssivalikot/ena8.jpg)

Abikurssi tuotti ongelmia, sillä Finnish graduation cap ei ollut tekoälylle tuttu. Laitoin perus Stable diffusionilla graduation ceremony with people wearing Finnish grduation caps ja tuli kuva parrakkaista miehistä, joilla oli amerikkalaistyylinen yo-juhla-asu (se kaapu) suomen lipun väreissä ja amerikkalaistyyliset yo-lakit.