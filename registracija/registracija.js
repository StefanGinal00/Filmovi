let baza = JSON.parse(localStorage.getItem("korisnici"));
let baza2 = JSON.parse(localStorage.getItem("novi_korisnici"));
let dugme = document.querySelector("button");
console.log(localStorage);
console.log(baza)

function register(){
    var ime = document.querySelectorAll("input")[0].value;
    var prezime = document.querySelectorAll("input")[1].value;
    var kor_ime = document.querySelectorAll("input")[2].value;
    var pass = document.querySelectorAll("input")[3].value;
    var konfrm = document.querySelectorAll("input")[4].value;

    if(pass != konfrm){
        alert("Nisu isti");
        return;
    }
    
    if(ime == ""){
        alert("Niste uneli");
        return;
    }
    for(i=0;i<baza.length;i++){
        if(kor_ime == baza[i].kor_ime){
            alert("Vec Postoji korisnik!");
            return;
        }
    }
    for(i in baza2){
        if(kor_ime == baza2[i].kor_ime){
            alert("Vec postoji korisnik");
            return;
        }
    }
    let objekat = {
            "kor_ime":kor_ime,
            "pass":pass,
            "prezime":prezime,
            "ime":ime
    }
    
    let string = JSON.stringify(objekat);
    baza.push(objekat);
    console.log(baza);
    var x = JSON.stringify(baza);
    localStorage.setItem("korisnici", x);
    console.log(localStorage)
    
    window.open("file:///C:/Users/Stefan/Desktop/Projekat%20iz%20Veb%20Dizajna/index.html", "_self");

}

dugme.onclick = register;
