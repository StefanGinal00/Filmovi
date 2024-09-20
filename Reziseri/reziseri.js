let baza_stranice = JSON.parse(localStorage.getItem("Filmovi"))
console.log(baza_stranice)
let izbor = document.querySelector("select");
brojac = 0;
for(let i = 0; i < baza_stranice.length; i++){
    if(izbor.innerHTML.includes(baza_stranice[i].reziser)){
        continue;
    }
    else{
    izbor.innerHTML += "<option value='"+baza_stranice[i].reziser+"'>" + baza_stranice[i].reziser + "</option>"
    }
}
izbor.onchange= selekt;
function selekt(){
    let div = document.querySelectorAll("div")[1];
    div.innerHTML = ""
for(let i = 0; i < baza_stranice.length; i++){
    if(izbor.options[izbor.selectedIndex].value == baza_stranice[i].reziser){
        console.log(baza_stranice[i].ime)
        if(baza_stranice[i].ime == ""){
            continue;
        }
        else{
        
        
        let link = "C:\Users\Stefan\Desktop\Projekat iz Veb Dizajna\Detalji_forma\detalji_forma.html";
        div.innerHTML += "<div class='slika' id='"+ baza_stranice[i].ime+"'>" + "<img src='"+baza_stranice[i].ime+".jpg' class='image'>" + "<div class='sredina'>"+"<div class='text'>"+"<a href='file:///C:/Users/Stefan/Desktop/Projekat%20iz%20Veb%20Dizajna/Detalji_forma/detalji_forma.html' id='link"+brojac+"'"+">Detalji</a>" + "</div>"+"</div>"+"</div>";
        let detalji = document.getElementById("link"+brojac);
        detalji.setAttribute('onclick', 'klik(document.getElementById('+"'"+baza_stranice[i].ime+"'"+'))')
        brojac = brojac + 1;
        }
    }
}
}