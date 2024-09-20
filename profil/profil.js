let sacuvaj = document.querySelectorAll("button")[1];
sacuvaj.style.display = "none"
let ime_profila = document.querySelector("h2")
let dugme_izmena = document.querySelectorAll("button")[0]
console.log(localStorage)
let logovan = JSON.parse(localStorage.getItem("ulogovan_korisnik"))
let baza = JSON.parse(localStorage.getItem("korisnici"))
let ime = document.querySelectorAll("input")[0]
let prezime = document.querySelectorAll("input")[1]
let korisnicko = document.querySelectorAll("input")[2]
let forma = document.querySelector("form")
console.log(baza[0].length)
for(let i = 0; i < baza.length; i++){
    if(logovan.kor_ime == baza[i].kor_ime){
        
        ime.value = baza[i].ime;
        prezime.value = baza[i].prezime;
        korisnicko.value = baza[i].kor_ime;
    }
}
for(let i = 0; i < baza[0].length; i++){
    if(logovan.kor_ime == baza[0][i].kor_ime){
        ime.value = baza[0][i].ime;
        prezime.value = baza[0][i].prezime;
        korisnicko.value = baza[0][i].kor_ime;
    }
}
function izmena(){
    forma.innerHTML = "<div class='Ime'><input type='text' name='ime' placeholder='Ime' ></div><div class='Prezime'><input type='text' name='prezime' placeholder='Prezime' </div><div class='kor_ime'><input type='text' name='kor_ime' id='korime' placeholder='Korisnicko ime' </div><div class='dugmetovi'><input type='password' name='sifra' placeholder='nova sifra' >"
    let div = document.querySelectorAll("div")[2]
    let dugme = document.querySelectorAll("button")[0]
    let sacuvaj = document.querySelectorAll("button")[1]
    dugme.style.display = "none";
    sacuvaj.style.display = "block";
    
}



function cuvanje(){
    console.log("klik")
    let ime = document.querySelectorAll("input")[0]
    let prezime = document.querySelectorAll("input")[1]
    let korisnicko = document.querySelectorAll("input")[2]
    let password = document.querySelectorAll("input")[3]
    for(let i = 0; i < baza.length; i++){
        if(logovan.kor_ime == baza[i].kor_ime){
            
            baza[i].ime = ime.value;
            baza[i].prezime = prezime.value;
            baza[i].kor_ime = korisnicko.value;
            baza[i].pass = password.value;
            console.log(baza[i])
            var x = {
                "kor_ime":baza[i].kor_ime,
                "pass":baza[i].pass
            }
            localStorage.setItem("ulogovan_korisnik", JSON.stringify(x))
            localStorage.setItem("korisnici", JSON.stringify(baza))
            console.log(localStorage)
        }
    }
    ime.disabled = true;
    prezime.disabled = true;
    korisnicko.disabled = true;
    password.disabled = true;
    dugme_izmena.style.display = "block";
    sacuvaj.style.display = "none";
    password.style.display = "none";
}


dugme_izmena.onclick = izmena;
sacuvaj.onclick = cuvanje;