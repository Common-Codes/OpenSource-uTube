window.onload = function(){
    const maestro = document.getElementById("master-div");
    //lol no user auth available rn
    const user = firebase.auth().currentUser;
    if(user){
        maestro.innerHTML = `<p>cu</p>`;
    }
}
