window.onload = function(){
    const maestro = document.getElementById("master-div");
    const maestroContent = document.getElementById("videos");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [channel, debug] = [fragment.get('user'), fragment.get('dev')];

    if(channel != null){ //store is a global var = firestore
        store.collection("c").where("channel", "==", channel)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const water = doc.data()
                    maestro.innerHTML = `<div id="profile-banner"><img src="${water.banner}" style="width: 100%;"></div><br><div id="profile" style="position: relative;"><img src="${water.img}" style="height: 29px; width: 29px; position: absolute; top: 16px; left: 5px;"><button style="position: absolute; top: 18px; right: 16px; background-color: crimson; color: white; height: 35px; width: 25%;">FOLLOW</button><p id="name" style="position: absolute; top: 6px; left: 48px;">${water.username}</p><p id="followers" style="position: absolute; top: -21px; right: 15px; color: gray;">${water.followers}</p></div>`;
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
                    maestroContent.innerHTML += pig;
    }
}
