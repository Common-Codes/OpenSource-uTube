window.onload = function() {
    const user = auth.currentUser;
    const loginD = document.getElementById("login");

    if(user) {
        store.collection('c').doc(user.uid).get().then(doc => {
            loginD.innerHTML += `<img style="width: 15px; height: 15px; border-radius: 50%; position: absolute; top: -21px; right: -188px;" onclick="location.href='https://common-codes.github.io/uTube/c/@me';" src="${doc.data().img}">`;
        })
    } else {
        loginD.innerHTML += `<button style="position: absolute; top: -21px; right: -188px; color: white; background-color: crimson;" onclick="location.href='https://common-codes.github.io/uTube/login.html';">LOGIN</button>`;
        console.log("no auth");
    }
}
