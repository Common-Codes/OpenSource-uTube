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
                    const pig = `div id="profile-banner">
            <img src="https://media.discordapp.net/attachments/858798985807527956/992489274769412277/banner-5.png" style="width: 100%;">
        </div>
        <br>
        <div id="profile" style="position: relative;">
             <img src="https://ggpht.ga/icons/LAcbj8kQTYn-6YG1IAjI1yFiUsRCxC2HUpqvPzuyM.png" style="height: 46px; width: 46px; position: absolute; top: -46px; left: 6px; border-radius: 50%;">
             <button onclick="followFunction()" style="position: absolute; top: 18px; right: 16px; background-color: crimson; color: black; height: 35px; width: 25%;">FOLLOW</button>
             <p id="name" style="position: absolute; top: 6px; left: 5px;">${water.username}</p>
             <p id="followers" style="position: absolute; top: -21px; right: 15px; color: lightgrey;">${water.followers} followers</p>
             <p id="counter" style="position: absolute; top: 32px; left: 5px; color: gray;">${water.videos} videos</p>
        </div>
        <div id="videos" onclick="location.href='https://common-codes.github.io/OpenSource-uTube/watch/#vid=${vdata.id}'" style="position: relative; top: 95px; width: 100%;">
            <div class="video-data"><img src="https://http.cat/404" style="height: 90px; width: 150px; position: absolute; left: 5px;">
                <b class="video-title" style="position: absolute; left: 160px; top: 8px;">${vdata.title}</b>
            </div>
            <br>
            <div style="position: relative; top: 64px;" class="video-data" onclick="location.href='https://common-codes.github.io/OpenSource-uTube/watch/#vid=${vdata.id}'"><img src="https://http.cat/404" style="height: 90px; width: 150px; position: absolute; left: 5px;">
            <b class="video-title" style="position: absolute; left: 160px; top: 8px;">${vdata.title}</b>
        </div>`;
                    maestroContent.innerHTML += pig;
    }
}
