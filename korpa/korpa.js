let korpa = JSON.parse(localStorage.getItem("korpa"));
let ulogovan = JSON.parse(localStorage.getItem("ulogovan_korisnik"));
let kupi = document.querySelector("button");
let tabela = document.querySelector("table");
let ukupno = document.getElementById("ukupno");
console.log(korpa)
console.log(ulogovan)
brojac = 0;

for(let i = 0; i < korpa.length; i++){
    tabela.innerHTML += "<tr>"+"<td>"+korpa[i].ime+"</td>"+"<td>"+"<button>^</button>"+"<p id='input"+brojac+"'>"+korpa[i].kolicina+"</p>"+"<button>v</button>"+"</td>"+"<td class='cenica"+brojac+"'>"+korpa[i].cena+"</td>"+"</tr>";
    //document.getElementById("input"+brojac).value = ;
    //brojac = brojac + 1;
    
}
for(let i=0;i<korpa.length;i++){
let dugme1 = document.querySelectorAll
let dugme2 =
}

function kupovina(){
    for(let i = 0; i < brojac; i++){
        ukupno.value = 0;
    }   
}

