window.onload = function(){
    const maestro = document.getElementById("master-div");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [channel, debug] = [fragment.get('user'), fragment.get('dev')];

    if(channel != null){ //store is a global var = firestore
        store.collection("c").where("channel", "==", channel)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const water = doc.data()
                    maestro.innerHTML = `<p>${water.channel}</p>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting data: ", error);
    });
    }
}
