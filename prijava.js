
let korisnici = [
    admini = [
    admin={
        "kor_ime":"admin",
        "pass":"admin"
    }],
    boban={
        "kor_ime":"BR123",
        "pass":"rajko123",
        "ime":"Boban",
        "prezime":"Rajovic"
    }
];
if(localStorage.getItem("korisnici")==null){
let u_string = JSON.stringify(korisnici);
let ubaco = localStorage.setItem("korisnici", u_string);
console.log(localStorage);
}
let dugme = document.querySelector("button");
let baza = JSON.parse(localStorage.getItem("korisnici"));
console.log(baza)
console.log(localStorage)
console.log(baza[0][0])
function login(){
    var unos_ime = document.querySelectorAll("input")[0].value;
    var unos_pass = document.querySelectorAll("input")[1].value;
    
    for(i=0;i<baza[0].length;i++){
        if(unos_ime == baza[0][i].kor_ime && unos_pass == baza[0][i].pass){
            let ulogovan = {
                "kor_ime":unos_ime,
                "pass":unos_pass
            }
            var x = JSON.stringify(ulogovan);
            localStorage.setItem("ulogovan_korisnik", x);
            window.open("file:///C:/Users/Stefan/Desktop/Projekat%20iz%20Veb%20Dizajna/homepage/home_admin.html", "_self");

        }
    }
  
   for(i=0;i<baza.length;i++){
        if(unos_ime == baza[i].kor_ime && unos_pass == baza[i].pass){
            let ulogovan = {
                "kor_ime":unos_ime,
                "pass":unos_pass
            }
            var x = JSON.stringify(ulogovan);
            localStorage.setItem("ulogovan_korisnik", x);
            window.open("homepage/home_admin.html", "_self");
            
    }
   }
    
}

dugme.onclick = login;
