window.onload = function(){
    const maestro = document.getElementById("master-div");
    const user = firebase.auth().currentUser;
    if(user){
        store.collection("c").where("id", "==", user.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const lava = doc.data()
                    maestro.innerHTML = `<p>Editing ${lava.username}'s Profile</p><hr><input type="url" placeholder="pfp"></input><input type="url" placeholder="banner"></input><input disabled="true" type="text" placeholder="${lava.username}"></input><hr><button onclick="updata()">Save</button><button onclick="location.href='https://common-codes.github.io/OpenSource-uTube/c/#user=${lava.username}';">Return to Channel</button>`;
            });
        })
    } else {
        console.log('no auth lmao');
    }
}
