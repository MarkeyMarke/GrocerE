import { fire } from "./firebase";

export function createUser(email, password, handleError) {
  return fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      logout(handleError);
      return true;
      //updateProfile(name);
    })
    .catch(function(error) {
      handleError(error.message);
    });
}

export function login(email, password, handleError) {
  return fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      return true;
    })
    .catch(function(error) {
      switch (error.code) {
        case "auth/invalid-email":
          handleError("Invalid email");
          break;
        case "auth/wrong-password":
          handleError("Invalid password");
          break;
        default:
          handleError(error.message);
      }
    });
}

export function updateProfile(name) {
  var user = fire.auth().currentUser;

  user
    .updateProfile({
      displayName: name
    })
    .then(function() {
      console.log("Update successful");
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function getUID() {
  return fire.auth().currentUser.uid;
}

export function updateEmail(newEmail) {
  var user = fire.auth().currentUser;
  user
    .updateEmail("newEmail")
    .then(() => {
      console.log("Email update successful");
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function sendPasswordResetEmail(emailAddress, handleError) {
  return fire
    .auth()
    .sendPasswordResetEmail(emailAddress)
    .then(() => {
      return true;
    })
    .catch(function(error) {
      handleError(error.message);
    });
}

export function logout(handleError) {
  return fire
    .auth()
    .signOut()
    .then(function() {
      return true;
    })
    .catch(function(error) {
      handleError(error.message);
    });
}
