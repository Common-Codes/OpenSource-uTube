window.onload = function() {
    const maestro = document.getElementById("master-div");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [video, debug] = [fragment.get('vid'), fragment.get('dev')];

    if(video != null){
        store.collection("vid").where("id", "==", video)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    maestro.innerHTML = `<video style="width: 100%;" controls><source src="${doc.src}" type="video/mp4">Your Browser does not support HTML video tags</video><br><p>${doc.title} by <a href="https://common-codes.github.io/OpenSource-uTube/c/#user=TallerThanShort">${doc.uploader}</a></p>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting data: ", error);
    });
    }
}
