firebase.initializeApp({
    apiKey: "AIzaSyBo0uQXU9uIRlsCTSX8yp_6WoDH9XWgbZg",
    authDomain: "firestore-d455c.firebaseapp.com",
    projectId: "firestore-d455c.firebaseapp.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fornavnI = document.querySelector(".labelFornavn");
var etternavnI = document.querySelector(".labelEtternavn");
var telefonI = document.querySelector(".labelTel");
var epostI = document.querySelector(".labelEpost");
var sporsmalT = document.querySelector(".labelSpørsmål");
var knappB = document.querySelector(".button");

knappB.addEventListener("click", function () {
    db.collection("Skjema").add({
       fornavn: fornavnI.value,
       etternavn: etternavnI.value,
       telefon: telefonI.value,
       epost: epostI.value,
       sporsmal: sporsmalT.value
    });
    fornavnI.value = "";
    etternavnI.value = "";
    telefonI.value = "";
    epostI.value = "";
    sporsmalT.value = "";
});

var mappe = db.collection("Skjema");

mappe.onSnapshot(function (data) {
    knappB.innerHTML = "";
    var dokumenter = data.docs;
    for(var x in dokumenter){
        knappB.innerHTML += dokumenter[x].data().fornavnI
            + dokumenter[x].data().etternavnI
            + dokumenter[x].data().telefonI
            + dokumenter[x].data().epostI
            + dokumenter[x].data().sporsmalT
    }
});
