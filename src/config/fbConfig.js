import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Initialize firebase
var config = {
  apiKey: "AIzaSyBfOR-rMsg1xEeJiOaT9MNnSiVQ2KjdivY",
  authDomain: "projectmanager-webapp-lonebots.firebaseapp.com",
  databaseURL: "https://projectmanager-webapp-lonebots.firebaseio.com",
  projectId: "projectmanager-webapp-lonebots",
  storageBucket: "projectmanager-webapp-lonebots.appspot.com",
  messagingSenderId: "23847722460",
  appId: "1:23847722460:web:c07ade08efae2e47acc319",
  measurementId: "G-D5G7JGYEVN",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
