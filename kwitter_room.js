var firebaseConfig = {
      apiKey: "AIzaSyCiqrCbC0rAxBIGfuPCHIhwI4F3XpOK8IY",
      authDomain: "kwitter-44cdb.firebaseapp.com",
      databaseURL: "https://kwitter-44cdb-default-rtdb.firebaseio.com",
      projectId: "kwitter-44cdb",
      storageBucket: "kwitter-44cdb.appspot.com",
      messagingSenderId: "779207045012",
      appId: "1:779207045012:web:0e03a6e6f2f6cfd3cf2981"
    };

    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
