let filmovi = [
    alien={
        "ime":"alien",
        "reziser":"Ridley Scott",
        "opis":"Film o vanzemaljcima",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    halloween={
        "ime":"halloween",
        "reziser":"John Carpenter",
        "opis":"Film o noci vestica",
        "kolicina": 4,
        "cena": 100

    },
    taxi_driver={
        "ime":"taxi driver",
        "reziser":"Martin Scorsese",
        "opis":"Neki taksista kao nesto opisopisopisopisopis",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    back_to_the_future={
        "ime":"back to the future",
        "reziser":"Robert Zemeckis",
        "opis":"Film o putovanju u buducnost",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    SW_empire={
        "reziser":"Irvin Kershner",
        "ime":"star wars",
        "opis":"Film o ratovima medju zvezdama",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    goodfellas={
        "reziser":"Martin Scorsese",
        "ime":"goodfellas",
        "opis":"Film o mafijasima",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    pulp_fiction={
        "reziser":"Quentin Tarantino",
        "ime":"pulp fiction",
        "opis":"Film o pretparackim pricama",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"

    },
    full_metal_jacket={
        "reziser":"Stanley Kubrick",
        "ime":"full metal jacket",
        "opis":"Film o vijetnamskom ratu",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    the_exorcist={
        "reziser":"William Friedkin",
        "ime":"the exorcist",
        "opis":"Film o isterivanju demona",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    the_thing={
        "reziser":"John Carpenter",
        "ime":"the thing",
        "opis":"Film o nekoj stvari",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    metropolis={
        "reziser":"Fritz Lang",
        "ime":"metropolis",
        "opis":"Film o distopiji",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
    bladerunner = {
        "reziser":"Ridley Scott",
        "ime":"bladerunner",
        "opis":"Neki trkac ostrica kao nesto opisopisopisopisopis",
        "kolicina": 4,
        "cena": 100,
        "god_pro": "1980"
    },
]
let korpa = [];
localStorage.setItem("korpa", JSON.stringify(korpa))
if(localStorage.getItem("Filmovi") === null ){
let film_str = JSON.stringify(filmovi);
localStorage.setItem("Filmovi", film_str);
let baza = JSON.parse(localStorage.getItem("Filmovi"));

console.log(baza);
console.log(localStorage);
let div = document.querySelectorAll("div")[1];
let link = "C:\Users\Stefan\Desktop\Projekat iz Veb Dizajna\Detalji_forma\detalji_forma.html";
}

let baza_stranice = JSON.parse(localStorage.getItem("Filmovi"));
brojac = 0;

for(i in baza_stranice){
    console.log(baza_stranice[i].ime)
    if(baza_stranice[i].ime == ""){
        continue;
    }
    else{
    let div = document.querySelectorAll("div")[1];
    let link = "C:\Users\Stefan\Desktop\Projekat iz Veb Dizajna\Detalji_forma\detalji_forma.html";
    div.innerHTML += "<div class='slika' id='"+ baza_stranice[i].ime+"'>" + "<img src='"+baza_stranice[i].ime+".jpg' class='image'>" + "<div class='sredina'>"+"<div class='text'>"+"<a href='file:///C:/Users/Stefan/Desktop/Projekat%20iz%20Veb%20Dizajna/Detalji_forma/detalji_forma.html' id='link"+brojac+"'"+">Detalji</a>" + "</div>"+"</div>"+"</div>";
    let detalji = document.getElementById("link"+brojac);
    detalji.setAttribute('onclick', 'klik(document.getElementById('+"'"+baza_stranice[i].ime+"'"+'))')
    brojac = brojac + 1;
    }
}
console.log(localStorage)
var x = JSON.parse(localStorage.getItem("Filmovi"));
console.log(x);
let pretraga = document.querySelector("button");

function search(){
    let unos = document.querySelector("input").value.toLowerCase();
    let div = document.querySelectorAll("div")[1];
    div.innerHTML = "";
    for(i in baza_stranice){

        if(baza_stranice[i].ime.includes(unos)){
            let div = document.querySelectorAll("div")[1];
            let link = "C:\Users\Stefan\Desktop\Projekat iz Veb Dizajna\Detalji_forma\detalji_forma.html";
            div.innerHTML += "<div class='slika' id='"+ baza_stranice[i].ime+"'>" + "<img src='"+baza_stranice[i].ime+".jpg' class='image'>" + "<div class='sredina'>"+"<div class='text'>"+"<a href='file:///C:/Users/Stefan/Desktop/Projekat%20iz%20Veb%20Dizajna/Detalji_forma/detalji_forma.html' id='link"+brojac+"'"+">Detalji</a>" + "</div>"+"</div>"+"</div>";
            let detalji = document.getElementById("link"+brojac);
            detalji.setAttribute('onclick', 'klik(document.getElementById('+"'"+baza_stranice[i].ime+"'"+'))')
            brojac = brojac + 1;
        }
    }
    
}

pretraga.onclick = search;
