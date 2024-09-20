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
