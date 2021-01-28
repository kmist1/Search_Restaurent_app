import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export default async function addingToCart(itemObj) {
    const {itemID, itemName, itemPrice, numberOfItems} = itemObj;
  try {

    const curUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    

    await db.collection("myCart").doc(itemID).set({itemID: itemID,itemName: itemName, itemPrice: itemPrice, itemQnt: numberOfItems});

  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
    console.log("There is something wrong!!!!", err.message);
  }
}


// Get firebase data
export const getData = async() => {
  try {

    const curUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    

    const data = await db.collection("myCart").get();
    setTimeout(console.log(data), 1000);

  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
    console.log("There is something wrong!!!!", err.message);
  }
}
