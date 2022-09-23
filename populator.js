function followFunction(){
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const channel = fragment.get('user');
    const newFollower = sessionStorage.getItem('uid');
    const followbtn = document.getElementById("followbtn");
    if(newFollower != null){
        store.collection('c').where("channel", "==", channel).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const toFollow = doc.id;
                console.log(toFollow)
                console.log(newFollower)
                store.collection('c').doc(toFollow).collection('followers').doc(newFollower).set({
                    isFollowing: 'true'
                })
            })
            followbtn.innerHTML = `<button onclick="unfollowFunction()" style="position: absolute; top: 18px; right: 16px; cursor: pointer; background-color: lightgray; color: black; height: 35px; width: 25%; border: none;">FOLLOWING</button>`
        })
    } else{
        location.href = 'https://common-codes.github.io/uTube/login.html'
    }
}

function unfollowFunction(){
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const channel = fragment.get('user');
    const newFollower = sessionStorage.getItem('uid');
    const followbtn = document.getElementById("followbtn");
    if(newFollower != null){
        store.collection('c').where("channel", "==", channel).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const toFollow = doc.id;
                console.log(toFollow)
                console.log(newFollower)
                store.collection('c').doc(toFollow).collection('followers').doc(newFollower).delete()
            })
            followbtn.innerHTML = `<button onclick="followFunction()" style="position: absolute; top: 18px; right: 16px; cursor: pointer; background-color: crimson; color: white; height: 35px; width: 25%; border: none;">FOLLOW</button>`
        })
    } else{
        location.href = 'https://common-codes.github.io/uTube/login.html'
    }
}