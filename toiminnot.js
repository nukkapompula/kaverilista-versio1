let lomake = document.forms["kysely"];
let lista = document.getElementById("nimiLista");

lomake.addEventListener("submit", uusiKaveri);

const kaverit = []

function uusiKaveri(event){
    event.preventDefault()
    let nimi = document.querySelector('input[type="text"]').value;
    if(nimi.length < 1){
        window.alert("Täytä tekstikenttä kaverisi nimellä.");
        return;
    }
    kaverit.push(nimi);
    document.querySelector('input[type="text"]').value = "";

    let uusiElementti = document.createElement("li");
    let uusiElementtiNimi = document.createTextNode(nimi);
    uusiElementti.appendChild(uusiElementtiNimi);
    document.querySelector("#nimiLista").appendChild(uusiElementti);
}

