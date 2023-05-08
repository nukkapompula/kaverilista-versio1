let lomake = document.forms["kysely"];
let lista = document.getElementById("nimiLista");

lomake.addEventListener("submit", uusiKaveri);

const kaverit = [];
let indeksi = 0;

function uusiKaveri(event){
    event.preventDefault()
    let nimi = document.querySelector('input[type="text"]').value;
    if(nimi.length < 1){
        window.alert("Täytä tekstikenttä kaverisi nimellä.");
        return;
    }
    kaverit.push(nimi);
    document.querySelector('input[type="text"]').value = "";
    indeksi += 1;
    console.log(`kaveri nro ${kaverit.length} lisätty, nimi: ${nimi}`)
    if (indeksi > 9) {
        console.log("NYT ON 10 TÄYNNÄ!!");
    } else {
        console.log("puuttuu jäseniä");
    }
}

//if(kaverit.length = 10){
//    for(let indeksi=0; indeksi<kaverit.length; indeksi++){
//        let uusiElementti = document.createElement("li");
//        let uusiElementtiNimi = document.createTextNode(kaverit[indeksi]);
//        uusiElementti.appendChild(uusiElementtiNimi);
//        document.querySelector("#nimiLista").appendChild(uusiElementti);
//    }
//}