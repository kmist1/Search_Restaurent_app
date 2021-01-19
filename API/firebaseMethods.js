import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export default async function addingToCart(itemObj) {
    const {itemName, itemPrice, numberOfItems} = itemObj;
  try {

    const curUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    

    await db.collection("myCart").doc('items').set({itemName: itemName, itemPrice: itemPrice, itemQnt: numberOfItems});

  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
    console.log("There is something wrong!!!!", err.message);
  }
}
