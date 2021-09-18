import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import "@firebase/firestore";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlBJtz1oV7_pWAyjrlkxdJ7ZenisHP5sk",
  projectId: "boltconcierge-2f0f9",
  databaseURL: "https://boltconcierge-2f0f9.firebaseio.com",
  storageBucket: "boltconcierge-2f0f9.appspot.com",
};

class Firebase {
  static initialize() {
    firebase.initializeApp(firebaseConfig);
  }
  //
  static storage() {
    return firebase.storage();
  }
  static getStorage() {
    return firebase.storage;
  }
  static firestore() {
    return firebase.firestore();
  }

  static getAllRetailers(callback) {
    let path = "retailers/all";
    firebase
      .database()
      .ref(path)
      .once("value", (snapshot) => {
        callback(snapshot.val());
      });
  }

  static getAllDeactiveRetailers = (callback) => {
    let path = "retailers/deactive";
    firebase
      .database()
      .ref(path)
      .once("value", (snapshot) => {
        let result = [];
        if (snapshot.val()) result = snapshot.val();
        console.log("result", result);
        callback(result);
      });
  };
}
Firebase.initialize();
export default Firebase;
