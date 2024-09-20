
console.log(localStorage);
let korpa = JSON.parse(localStorage.getItem("korpa"))
console.log(korpa)
let baza = JSON.parse(localStorage.getItem("film_kliknut"));
let filmovi = JSON.parse(localStorage.getItem("Filmovi"));
let korisnik = JSON.parse(localStorage.getItem("ulogovan_korisnik"))
let korisnici = JSON.parse(localStorage.getItem("korisnici"));
console.log(baza);
console.log(filmovi);

let sacuvaj = document.querySelectorAll("button")[2];
let brojac = document.querySelectorAll("input")[2];
let dodaj_k = document.querySelectorAll("button")[3];
dodaj_k.style.display = "none";
sacuvaj.style.display = "none";
let izmeni = document.querySelectorAll("button")[1];
let obrisi = document.querySelectorAll("button")[0];
let ime = document.querySelectorAll("input")[0];
let rezija = document.querySelectorAll("input")[1];
let opis = document.querySelector("textarea");
let slika = document.querySelector("img");
let forma = document.querySelector("form");

for(let i = 0; i < korisnici[0].length; i++){
    if(korisnik.kor_ime == korisnici[0][i].kor_ime){
        dodaj_k.style.display = "none";
        brojac.style.display = "none";
    }
}
for(let i = 0; i<korisnici.length; i++){
    if(korisnik.kor_ime == korisnici[i].kor_ime){
        dodaj_k.style.display = "block";
        brojac.style.display = "block";
        obrisi.style.display = "none";
        izmeni.style.display = "none";
    }
}

for(let i = 0; i<filmovi.length;i++){
   if(filmovi[i].ime == baza.film){
        ime.value = filmovi[i].ime+" "+ filmovi[i].god_pro;
        rezija.value = filmovi[i].reziser;
        opis.value = filmovi[i].opis;
        slika.src = baza.film + ".jpg"
    }
}

function izmena (){
    obrisi.style.display = "none";
    izmeni.style.display = "none";
    sacuvaj.style.display = "block";
    sacuvaj.style.marginLeft = "50%";
    forma.innerHTML = "<input type='text' name='ime' required> <label for='rezi'>Rezisirao:</label><input type='text' name='rezi' required> <textarea name='' id='' cols='100' rows='10' required></textarea><img>"
    let slika = document.querySelector("img");
    slika.src = baza.film + ".jpg";
}

function cuvanje(){
    let ime = document.querySelectorAll("input")[0];
    let rezija = document.querySelectorAll("input")[1];
    let opis = document.querySelector("textarea");

    for(i in filmovi){
        if(filmovi[i].ime == baza.film){
            filmovi[i].ime=ime.value;
            filmovi[i].reziser=rezija.value;
            filmovi[i].opis=opis.value;
            slika.src = baza.film + ".jpg"
         }
     }
    sacuvaj.style.display = "none";
    obrisi.style += "display: 'block'";
    izmeni.style += "display: 'block'";
    
    localStorage.setItem("Filmovi", JSON.stringify(filmovi));
     console.log(localStorage)
}

function brisanje(){
    ime.value = ""
    rezija.value = ""
    opis.value = "";
    for(i in filmovi){
        if(filmovi[i].ime == baza.film){
            filmovi[i].ime="";
            filmovi[i].reziser="";
            filmovi[i].opis = "";
            slika.src = "";
            localStorage.removeItem(filmovi[i]);
         }
     }
     localStorage.setItem("Filmovi", JSON.stringify(filmovi));
     console.log(localStorage)
}

function u_korpu(){
    for(i in filmovi){
        if((filmovi[i].kolicina-brojac.value) < 0){
            alert("Nema toliko filmova na lageru");
        }
        else{
            for(let i = 0; i<filmovi.length;i++){
                if(filmovi[i].ime == baza.film){
                    let film = {
                        "ime": filmovi[i].ime,
                        "kolicina":brojac.value,
                        "cena":(filmovi[i].cena * brojac.value)
                    }
                    korpa.push(film);
                    localStorage.setItem("korpa", JSON.stringify(korpa));
                    console.log(localStorage.getItem("korpa"))
                    return;
                }
            }
        }
        
    }
}

dodaj_k.onclick = u_korpu;
izmeni.onclick = izmena;
sacuvaj.onclick = cuvanje;
obrisi.onclick = brisanje;