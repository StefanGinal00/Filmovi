let dugme = document.querySelector("button");

function dodaj_a(){
    let unos1 = document.querySelectorAll("input")[0].value;
    let unos2 = document.querySelectorAll("input")[1].value;
    let unos3 = document.querySelectorAll("input")[2].value;
    let unos4 = document.querySelectorAll("input")[3].value;
    let baza = JSON.parse(localStorage.getItem("korisnici"));
    let novi_admin = {
        "kor_ime":unos1,
        "pass":unos2,
        "ime":unos3,
        "prezime":unos4
    }
    baza[0].push(novi_admin);
    console.log(baza);
    localStorage.setItem("korisnici", JSON.stringify(baza))
    alert("Admin je dodat");
    window.open("file:///C:/Users/Stefan/Desktop/Projekat%20iz%20Veb%20Dizajna/homepage/home_admin.html", "_self");
    
}
dugme.onclick = dodaj_a;