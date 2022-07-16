window.onload = function(){
    const maestro = document.getElementById("master-div");
    const maestroContent = document.getElementById("videos");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [channel, debug] = [fragment.get('user'), fragment.get('dev')];
    const user = auth.currentUser;
    const logbutt = document.getElementById("login");

    if(user) {
        store.collection('c').doc(user.uid).get().then(doc => {
            logbutt.innerHTML = `<img style="width: 21px; height: 21px; border-radius: 50%; position: absolute; top: -21px; right: -188px;" src="${doc.data().img}">`;
        }
    } else {
        console.log("no auth");
    }

    if(channel != null) {
    loginFunction();
        store.collection("c").where("channel", "==", channel)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const water = doc.data()
                    maestro.innerHTML = `<div id="profile-banner" style="position: relative;"><img src="${water.banner}" style="width: 100%;"></div><br><div id="profile" style="position: relative;"><img src="${water.img}" style="height: 48px; width: 48px; border-radius: 50%; position: absolute; top: -46px; left: 6px;"><div id="followbtn"><button onclick="followFunction()" style="position: absolute; top: 18px; right: 16px; background-color: crimson; color: white; height: 35px; width: 25%;">FOLLOW</button></div><p id="name" style="position: absolute; top: 6px; left: 5px;">${water.username}</p><p id="followers" style="position: absolute; top: -21px; right: 15px; color: gray;">${water.followers} followers</p><p id="counter" style="position: absolute; top: 32px; left: 5px; color: gray;">${water.videos} videos</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting data: ", error);
    });
    }

    if(channel != null){
        store.collection("vid").where("channel", "==", channel)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const vdata = doc.data()
                    const cuntent = `<div onclick="location.href='https://common-codes.github.io/uTube/watch/#vid=${vdata.id}'" class="video-data" style="position: relative;"><img src="${vdata.vod}" style="height: 90px; width: 150px; position: absolute; left: 5px;"><b class="video-title" style="position: absolute; left: 160px; top: 8px;">${vdata.title}</b></div><br><br><br><br><br><hr>`;
                    maestroContent.innerHTML += cuntent;
            })
        })
    }
}

const followFunction = () => {
    //const toflow = document.getElementById("channelname").innerText;
    const flowbtn = document.getElementById("followbtn");
    const user = firebase.auth().currentUser;
    if(user) {
        // TO-DO: API shid so following is a thing.
        flowbtn.innerHTML = `<button onclick="followFunction()" style="position: absolute; top: 8px; right: 16px; background-color: lightgray; color: black; height: 35px; width: 25%; border: none;">FOLLOWING</button>`;
    } else {
        location.href="https://common-codes.github.io/uTube/login.html";
    }
}


