
//ADICIONE OS LINKS DO SEU APP FIREBASE
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


// Adicionar a função para adicionar usuário 
function addUser() { 
   user_name = document.getElementById("user_name").value; 
   firebase.database().ref("/").child(user_name).update({ purpose : "adicionando usuário" }); 
}
