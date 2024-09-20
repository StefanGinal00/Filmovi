let dugme = document.querySelector("button")
let baza = JSON.parse(localStorage.getItem("Filmovi"))

function dodaj(){
    console.log("klik")
    let unos1= document.querySelectorAll("input")[0].value
    let unos2=document.querySelectorAll("input")[1].value
    let unos3=document.querySelectorAll("input")[2].value
    let unos4=document.querySelectorAll("input")[3].value
    let unos5=document.querySelectorAll("input")[4].value
    let opis=document.querySelector("textarea")

    if(unos1 == ""){
        alert("polje nije uneto")
        return;
    }
    if(unos2 == ""){
        alert("polje nije uneto")
        return;
    }
    if(unos3 == ""){
        alert("polje nije uneto")
        return;
    }
    if(unos4 == ""){
        alert("polje nije uneto")
        return;
    }
    if(unos5 == ""){
        alert("polje nije uneto")
        return;
    }
    if(opis == ""){
        alert("polje nije uneto")
        return;
    }
    

    let novi_film ={
        "ime":unos1,
        "reziser":unos2,
        "opis":"opis",
        "kolicina": unos3,
        "cena": unos4,
        "god_pro": unos5
    }
    
    baza.push(novi_film)
    localStorage.setItem("Filmovi", JSON.stringify(baza))
    console.log(localStorage)
    alert("Film je dodat")
    window.open("file:///C:/Users/Stefan/Desktop/Projekat%20iz%20Veb%20Dizajna/homepage/home_admin.html", "_self");

}

dugme.onclick = dodaj;