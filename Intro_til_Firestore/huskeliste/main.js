firebase.initializeApp({
    apiKey: "AIzaSyBpB4de4KF0LkWVUDQl_gwUICdPr3KzNF4",
    authDomain: "huskeliste-4d7cd.firebaseapp.com",
    projectId: "huskeliste-4d7cd"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var todoE = document.querySelector(".todo");
var knappE = document.querySelector(".knapp");
var listeE = document.querySelector(".liste");

knappE.addEventListener("click", function () {
    db.collection("huskeliste").add({
        todo: todoE.value
    });
    todoE.value = "";
});

var ref = db.collection("huskeliste");

ref.onSnapshot(function (data) {
    listeE.innerHTML ="";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" + dokument[x].data().todo + "</li>";
    }
});
