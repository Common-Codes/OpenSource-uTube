window.onload = function(){
    const content = document.getElementById("master-div");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [channel, debug] = [fragment.get('user'), fragment.get('dev')];

    if(channel != null){
        store.collection("c").where("channel", "==", channel)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    content.innerHTML = `<p>We told u this was in dev</p>`;
        });
    }
}
