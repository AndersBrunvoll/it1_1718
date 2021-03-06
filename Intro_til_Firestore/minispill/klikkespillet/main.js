firebase.initializeApp({
    apiKey: "AIzaSyAczPGn6SQROuCnJ8AFn8zAGNBbAo8YaTc",
    authDomain: "klikkespilllet.firebaseapp.com",
    projectId: "klikkespilllet"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnE = document.querySelector(".navn");
var startE = document.querySelector(".start");
var klikkE = document.querySelector(".klikk");
var klikkverdiE = document.querySelector(".klikkverdi");
var listeE = document.querySelector(".poengliste");

var antKlikk = 0;



klikkverdiE.innerHTML = antKlikk;

klikkE.addEventListener("click", function () {
    antKlikk = antKlikk + 1;
    klikkverdiE.innerHTML = antKlikk;
});

startE.addEventListener("click", function () {
   antKlikk = 0;
   klikkverdiE.innerHTML = antKlikk;

   setTimeout(function () {
       db.collection("spill").add({
           navn: navnE.value,
           poeng: antKlikk
       });
       alert(antKlikk);
   }, 5000);

});

var mappe = db.collection("spill").orderBy("poeng", "desc").limit(20);


mappe.onSnapshot(function (data) {
    listeE.innerHTML = "";
   var dokument = data.docs;

   for(var x in dokument){
       listeE.innerHTML += "<li>" + dokument[x].data().navn + ": " + dokument[x].data().poeng + "</li>"
   }
});

