import firebase from 'firebase'

  // var firebaseConfig = {
  //       apiKey: "AIzaSyAGUbPn-uePTGxDh4Sh_WhaHefnFjaQJKk",
  //       authDomain: "prueba-3c63e.firebaseapp.com",
  //       projectId: "prueba-3c63e",
  //       storageBucket: "prueba-3c63e.appspot.com",
  //       messagingSenderId: "90556280096",
  //       appId: "1:90556280096:web:28af55eff5c5311e98fb45",
  //       measurementId: "G-VJWR71H9XH"
  //     };

    var firebaseConfig = {
      apiKey: "AIzaSyCe8e6TP4T6fV_RAhkRniuUZdBgazXS2DE",
      authDomain: "prueba2-14220.firebaseapp.com",
      projectId: "prueba2-14220",
      storageBucket: "prueba2-14220.appspot.com",
      messagingSenderId: "184525436677",
      appId: "1:184525436677:web:48f713efa89770b8cce96c",
      measurementId: "G-PPETGFXGZ8"
    };


  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  firebase.db = firebase.firestore();
  firebase.analytics();

  console.log("Llego firebase", firebase.database())


export default firebase;



