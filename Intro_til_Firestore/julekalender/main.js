// Initialize Firebase
var config = {
    apiKey: "AIzaSyBo0uQXU9uIRlsCTSX8yp_6WoDH9XWgbZg",
    authDomain: "firestore-d455c.firebaseapp.com",
    databaseURL: "https://firestore-d455c.firebaseio.com",
    projectId: "firestore-d455c",
    storageBucket: "firestore-d455c.appspot.com",
    messagingSenderId: "841759557436"
};
firebase.initializeApp(config);
var db = firebase.firestore();

/*** Legger til 24 luker
for(var lukenummer = 1; lukenummer<=24; lukenummer++){
    db.collection("julekalender").add({
        luke: lukenummer
    });
}
*/

var pakkerE = document.querySelector(".pakker");
var luke = document.querySelector(".luke");

var ref = db.collection("julekalender");
var query = ref.where("luke", "==", 12).where("luke", "==", 24);

query.onSnapshot(function (data) {
   var objekt = data.docs;
   for(var x in objekt){

       pakkerE.innerHTML +=     "<div class='luke'>"
                                + objekt[x].data().luke
                                + "</div>";

   }
});
