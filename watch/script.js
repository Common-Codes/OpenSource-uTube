window.onload = function() {
    const maestro = document.getElementById("master-div");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [video, dev] = [fragment.get('vid'), fragment.get('dev')];
    const playerWidth = window.innerWidth;

    if(video != null){
        store.collection("vid").where("id", "==", video)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const vdata = doc.data()
                    if(playerWidth > '800'){
                        maestro.innerHTML = `<video style="width: 60%;" controls loop poster="${vdata.vod}"><source src="${vdata.src}" type="video/mp4">Your Browser does not support HTML video tags</video><br><p>${vdata.title}</p><div style="width: 60%; height: 49px; font-size: 16px; position: relative; background-color: gray;"><div id="followbtn"><button onclick="followFunction()" style="cursor: pointer; position: absolute; top: 8px; right: 16px; background-color: crimson; color: white; height: 35px; width: 25%; border: none;">FOLLOW</button></div><img title="${vdata.channel}" onclick="location.href='https://common-codes.github.io/uTube/c/#user=${vdata.channel}';" src="${vdata.uploader}" style="height: 24px; width: 24px; border-radius: 50%; position: absolute; top: 10px; left: 5px;"><p id="channelname" onclick="location.href='https://common-codes.github.io/uTube/c/#user=${vdata.channel}';" title="Go to ${vdata.channel}'s Channel" style="cursor: pointer; position: absolute; top: -1px; left: 40px; color: white;">${vdata.channel}</p></div>`;
                    } else{
                        maestro.innerHTML = `<video style="width: 100%;" controls loop poster="${vdata.vod}"><source src="${vdata.src}" type="video/mp4">Your Browser does not support HTML video tags</video><br><p>${vdata.title}</p><div style="width: 100%; height: 49px; font-size: 16px; position: relative; background-color: gray;"><div id="followbtn"><button onclick="followFunction()" style="cursor: pointer; position: absolute; top: 8px; right: 16px; background-color: crimson; color: white; height: 35px; width: 25%; border: none;">FOLLOW</button></div><img onclick="location.href='https://common-codes.github.io/uTube/c/#user=${vdata.channel}';" src="${vdata.uploader}" style="height: 24px; width: 24px; border-radius: 50%; position: absolute; top: 10px; left: 5px;"><p id="channelname" onclick="location.href='https://common-codes.github.io/uTube/c/#user=${vdata.channel}';" style="position: absolute; top: -1px; left: 40px; color: white;">${vdata.channel}</p></div>`;
                    }
                    document.title = `${vdata.title} | uTube`
        });
    })
    .catch((error) => {
        window.alert("Error getting data: ", error);
    });
    }
    loginFunction()
}
