import {fire} from './firebase';

export function createUser(email, password, name){
  fire.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      login(email, password);
      updateProfile(name);
    }).catch(function (error){
      console.log(error);
    });
}

export function login(email, password){
  return fire.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      return true;
    }).catch (function (error){
      return false;
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
