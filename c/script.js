window.onload = function(){
    const maestro = document.getElementById("master-div");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [channel, debug] = [fragment.get('user'), fragment.get('dev')];

    if(channel != null){2 //store is a global var = firestore
        store.collection("c").where("channel", "==", channel)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    maestro.innerHTML = `<p>Still WIP</p>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting data: ", error);
    });
    }
}
