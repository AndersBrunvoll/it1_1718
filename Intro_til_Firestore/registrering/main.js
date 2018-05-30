firebase.initializeApp({
    apiKey: "AIzaSyBo0uQXU9uIRlsCTSX8yp_6WoDH9XWgbZg",
    authDomain: "firestore-d455c.firebaseapp.com",
    projectId: "firestore-d455c"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnInput = document.querySelector(".navn");
var nummerInput = document.querySelector(".nummer");
var fartInput = document.querySelector(".fart");
var tidspunktInput = document.querySelector(".tidspunkt");
var listeDiv = document.querySelector(".liste");
var knappE = document.querySelector(".registrer");
var registerTbody = document.querySelector(".register");

knappE.addEventListener("click", function () {
    db.collection("Fartskontroll").add({
        navn: navnInput.value,
        nummer: nummerInput.value,
        fart: fartInput.value,
        tidspunkt: tidspunktInput.value
    });
        navnInput.value = "";
        nummerInput.value = "";
        fartInput.value = "";
        tidspunktInput.value = "";
});

var mappe = db.collection("Fartskontroll");

mappe.onSnapshot(function (data) {
    registerTbody.innerHTML = "";
    var dokumenter = data.docs;
    for(var x in dokumenter){
        registerTbody.innerHTML += "<tr><td>" + dokumenter[x].data().navn + "</td><td>" + dokumenter[x].data().nummer + "</td><td>" + dokumenter[x].data().fart + "km/t" +
            "</td><td>" + dokumenter[x].data().tidspunkt.split("T")[0] + "</td>" + "<td>" + dokumenter[x].data().tidspunkt.split("T")[1] + "</td>" + "</tr>";
    }
});

