document.addEventListener("DOMContentLoaded", function() {
    const erityisruokavalio = document.getElementById("erityisruokavalio");
    const opiskelija = document.getElementById("opiskelija");
    const kyyditys = document.getElementById("kyyditys");
    const erityisruoka = document.getElementById("eriruoka");
    const opiskelijaNro = document.getElementById("opiskelijanro");
    const kyydit = document.getElementById("kyydit");
    const muu = document.getElementById("muuta");
    const ilmoittaudu = document.getElementById("ilmoittaudu-btn");

    erityisruokavalio.addEventListener("change", function() {
        //Jos käyttäjä klikkasi yo. checkboxia, näytetään erityisruokavalion textarea.
        if (erityisruokavalio.checked) {
            erityisruoka.parentNode.style.display = "block";
        } else {
            erityisruoka.parentNode.style.display = "none";
        }
    });

    opiskelija.addEventListener("change", function() {
        //Jos käyttäjä klikkasi yo. checkboxia, näytetään input-kenttä opiskelijanumerolle.
        if (opiskelija.checked) {
            opiskelijaNro.style.display = "block";
        } else {
            opiskelijaNro.style.display = "none";
        }
    });

    kyyditys.addEventListener("change", function() {
        //Jos käyttäjä klikkasi yo. checkboxia, näytetään valikko kyydeille.
        if (kyyditys.checked) {
            kyydit.style.display = "block";
        } else {
            kyydit.style.display = "none";
        }
    });

    ilmoittaudu.addEventListener("click", function(event) {
        const etunimi = document.getElementById("enimi").value;
        const sukunimi = document.getElementById("snimi").value;
        const sahkoposti = document.getElementById("sposti").value;
        
        let puuttuvatKentat = [];

        //Tarkistetaan, onko kentissä arvot (lisätään arrayhyn, jos arvo puuttuu).
        if (!etunimi) puuttuvatKentat.push("Etunimi");
        if (!sukunimi) puuttuvatKentat.push("Sukunimi");
        if (!sahkoposti) puuttuvatKentat.push("Sähköposti");
        if (!muu.value) puuttuvatKentat.push("Muuta");

        //Alla tarkistetaan checkboxien valinnat ja niiden kentät (lisätään arrayhyn, jos arvoja puuttuu).
        if (erityisruokavalio.checked && !erityisruoka.value) {
            puuttuvatKentat.push("Erityisruokavalio");
        }
        if (opiskelija.checked && !opiskelijaNro.value) {
            puuttuvatKentat.push("Opiskelijanumero");
        }
        if (kyyditys.checked && kyydit === "tyhja") {
            puuttuvatKentat.push("Kyyditys");
        }
        
        //Näytetään käyttäjä varoitusteksti, jos jossain kentässä ei ole arvoa.
        if (puuttuvatKentat.length > 0) {
            alert("Täytä seuraavat kentät: " + puuttuvatKentat.join(", "));
        }
    });
});