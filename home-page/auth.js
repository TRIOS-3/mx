function signIn(){
    function newlogin(user){
      if(user){
        app(user);
      }
      else{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // ...
            }
            // The signed-in user info.
            var user = result.user;
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }
      firebase.auth().onAuthStateChanged(newlogin);
    }
    function app(user){
      document.getElementById("displayName").innerHTML = user.displayName;
      document.getElementById("profileimg").setAttribute("src", user.profileurl);
    }
}
window.onload= signIn;
