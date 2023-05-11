let lomake = document.forms["kysely"];
let lista = document.getElementById("nimiLista");

lomake.addEventListener("submit", uusiKaveri);

const kaverit = [];

function uusiKaveri(event){
    event.preventDefault()
    let nimi = document.querySelector('input[type="text"]').value;
    if(nimi.length < 1){
        window.alert("Täytä tekstikenttä kaverisi nimellä.");
        return;
    }

    if (kaverit.length == 10) {
        for(let apuri=0; apuri<kaverit.length; apuri++){
            let poistettava = document.getElementById("listaEsine");
            lista.removeChild(poistettava);
        }
        kaverit.length = 0;
    }

    kaverit.push(nimi);
    document.querySelector('input[type="text"]').value = "";
    console.log(`kaveri nro ${kaverit.length} lisätty, nimi: ${nimi}`)

    if (kaverit.length == 10) {
        console.log("NYT ON 10 TÄYNNÄ!!");
        for(let valitsin=0; valitsin<kaverit.length; valitsin++){
            let uusiElementti = document.createElement("li");
            let uusiElementtiNimi = document.createTextNode(kaverit[valitsin]);
            uusiElementti.id = "listaEsine";
            uusiElementti.appendChild(uusiElementtiNimi);
            document.querySelector("#nimiLista").appendChild(uusiElementti);
        }
    } else {
        console.log("puuttuu immeisiä");
    }
}
