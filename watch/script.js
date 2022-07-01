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
                    maestro.innerHTML = `<video style="width: 100%;" controls><source src="${vdata.src}" type="video/mp4">Your Browser does not support HTML video tags</video><br><p>${vdata.title}</p><div style="width: 100%; height: 49px; font-size: 16px; position: relative; background-color: black;"><button style="position: absolute; top: 8px; right: 16px; background-color: crimson; color: white; height: 35px; width: 25%;">FOLLOW</button><img src="${vdata.uploader}" style="height: 24px; width: 24px; border-radius: 50%; position: absolute; top: 10px; left: 5px;"><p style="position: absolute; top: -1px; left: 40px; color: white;">${vdata.channel}</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting data: ", error);
    });
    }
}
