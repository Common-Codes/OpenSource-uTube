window.onload = function() {
    const maestro = document.getElementById("master-div");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [video, debug] = [fragment.get('vid'), fragment.get('dev')];

    if(video != null){
        store.collection("vid").where("id", "==", video)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const vdata = doc.data()
                    maestro.innerHTML = `<video style="width: 100%;" controls><source src="${vdata.src}" type="video/mp4">Your Browser does not support HTML video tags</video><br><p>${vdata.title}</p><div style="width: 100%; height: 49px; font-size: 16px; position: relative; background-color: black;"><div id="followbtn"><button onclick="followFunction()" style="position: absolute; top: 18px; right: 16px; background-color: crimson; color: white; height: 35px; width: 25%; border: none;">FOLLOW</button></div><img onclick="location.href='https://common-codes.github.io/OpenSource-uTube/c/#user=${vdata.channel}';" src="${vdata.uploader}" style="height: 24px; width: 24px; border-radius: 50%; position: absolute; top: 10px; left: 5px;"><p id="channelname" onclick="location.href='https://common-codes.github.io/OpenSource-uTube/c/#user=${vdata.channel}';" style="position: absolute; top: -1px; left: 40px; color: white;">${vdata.channel}</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting data: ", error);
    });
    }
}

const followFunction = () => {
    const toflow = document.getElementById("channelname").innerText;
    const flowbtn = document.getElementById("followbtn");
    const user = firebase.auth().currentUser;
    if(user) {
        // TO-DO: API shid so following is a thing.
        flowbtn.innerHTML = `<button onclick="followFunction()" style="position: absolute; top: 18px; right: 16px; background-color: lightgray; color: black; height: 35px; width: 25%; border: none;">FOLLOWING</button>`;
    } else {
        location.href="https://common-codes.github.io/OpenSource-uTube/login.html";
    }
}
