//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyA8-TCngNz31DSiWrP9fqtruWf0AsKeYXs",
  authDomain: "socialmedia-5b2a7.firebaseapp.com",
  databaseURL: "https://socialmedia-5b2a7-default-rtdb.firebaseio.com",
  projectId: "socialmedia-5b2a7",
  storageBucket: "socialmedia-5b2a7.appspot.com",
  messagingSenderId: "33493924063",
  appId: "1:33493924063:web:102c42636746dfb300516a",
  measurementId: "G-Z762TR0EVB"
};

// Inicializar Firebase 
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
