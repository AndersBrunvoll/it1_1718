
firebase.initializeApp({
    apiKey: "AIzaSyC_T9InLok0HmgFhHwVJC1pwJXbewOodrc",
    authDomain: "minforstedb-3fd4b.firebaseapp.com",
    projectId: "minforstedb-3fd4b"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector(".tittel");
var tekstE = document.querySelector(".tekst");
var knappE = document.querySelector(".knapp");
var listeE = document.querySelector(".liste");

knappE.addEventListener("click", function () {
    db.collection("mappe").add({
        tittel: tittelE.value,
        tekst: tekstE.value
    });
    tittelE.value = "";
    tekstE.value = "";
});

var ref = db.collection("mappe");

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" + dokument[x].data().tittel + " " + dokument[x].data().tekst + "</li>";
    }
});

