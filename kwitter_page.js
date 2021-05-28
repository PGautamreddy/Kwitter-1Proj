//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyDnYtj-8FGbrVYXvos0IKFdwjWWZWhvwso",
      authDomain: "kwitter-1-a4719.firebaseapp.com",
      projectId: "kwitter-1-a4719",
      storageBucket: "kwitter-1-a4719.appspot.com",
      messagingSenderId: "962084483323",
      appId: "1:962084483323:web:b49c50aaf066d01f4c405e"
    };

    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

    user_name = localStorage.getItem("user_name");
    Room_name = localStorage.getItem("room_name");

    function Send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(Room_name).push({
                Name : user_name,
                Message : msg,
                Like : 0
          });
    }