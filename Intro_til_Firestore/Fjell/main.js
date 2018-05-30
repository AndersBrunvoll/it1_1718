firebase.initializeApp({
    apiKey: "AIzaSyA0ooqAK8vBx8ljbE7kUCRyzrpZhASLX1g",
    authDomain: "filmer-d65c1.firebaseapp.com",
    projectId: "filmer-d65c1",
    storageBucket: "filmer-d65c1.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fjellnavnInput = document.querySelector(".fjellnavn");
var mohInput = document.querySelector(".moh");
var fjellbildeInput = document.querySelector(".fjellbilde");
var knappKnapp = document.querySelector(".knapp");

knappKnapp.addEventListener("click", function () {

    var storageRef = firebase.storage().ref("filmer/fjell");
    var bilde = fjellbildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);

    uploadTask.on("state_changed",
        function (){},
        function (){},
        function (){
            db.collection("fjell").add({
                fjellnavn: fjellnavnInput.value,
                moh: mohInput.value*1,
                fjellbilde: uploadTask.snapshot.downloadURL
            });
        }
    );

    /*
    db.collection("fjell").add({
        fjellnavn: fjellnavnInput.value,
        moh: mohInput.value*1,
        fjellbilde: fjellbildeInput.files[0].name
    });
    */
});