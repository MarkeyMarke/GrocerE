import {fire} from './firebase';
import {handleError} from "../components/login.jsx";

export function createUser(email, password, handleError){
  return fire.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      return true;
      //updateProfile(name);
    }).catch(function (error){
      handleError(error.message);
    });
}

export function login(email, password, handleError){
  return fire.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      return true;
    }).catch (function (error){
      switch (error.code){
        case 'auth/invalid-email':
          handleError("Invalid email");
          break;
        case 'auth/wrong-password':
          handleError("Invalid password");
          break;
      }
    });
}

export function updateProfile(name){
  var user = fire.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function() {
    console.log("Update successful");
  }).catch(function(error){
    console.log(error);
  })
}
export function checkUserStatus(){
  fire.auth().onAuthStateChanged(function(user){
    if (user){
      console.log(user.displayName);
    } else {
      console.log("rip");
    }
  });
}

export function updateEmail(newEmail){
  var user = fire.auth().currentUser;
  user.updateEmail("newEmail").then(function(){
    console.log("Email update successful");
  }).catch(function(error) {
    console.log(error);
  });
}

export function logout(){
  fire.auth().signOut().then(function(){
    console.log("Sign out sucessful");
  }).catch(function(error){
    console.log(error);
  });
}
