
firebase.initializeApp({
    apiKey: "AIzaSyC_T9InLok0HmgFhHwVJC1pwJXbewOodrc",
    authDomain: "minforstedb-3fd4b.firebaseapp.com",
    projectId: "minforstedb-3fd4b"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fornavnE = document.querySelector(".fornavn");
var etternavnE = document.querySelector(".etternavn");
var alderE = document.querySelector(".alder");
var emailE = document.querySelector(".email");
var knappE = document.querySelector(".registrer");
var listeE = document.querySelector(".liste");

knappE.addEventListener("click", function () {
    db.collection("bruker").add({
        fornavn: fornavnE.value,
        etternavn: etternavnE.value,
        alder: alderE.value,
        email: emailE.value
    });
    fornavnE.value = "";
    etternavnE.value = "";
    alderE.value = "";
    emailE.value = "";
});

var ref = db.collection("bruker");

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" + dokument[x].data().fornavn + " " + dokument[x].data().etternavn + " " +
            dokument[x].data().alder + " " + dokument[x].data().email + "</li>";
    }
});


