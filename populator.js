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

const populate = (data) => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const currentVid = fragment.get('vid');
    let lists = ``
    data.forEach(doc => {
        const reco = doc.data();
        if(reco.id === currentVid){
            return;
        } else{
            const html = `
            <div style="position: relative;">
                <img src="${reco.vod}" style="width: 150px; height: 90px; cursor: pointer;" onclick="location.href='https://common-codes.github.io/uTube/watch#vid=${reco.id}';">
                <p style="position: absolute; top: -2px; left: 155px; cursor: pointer;" onclick="location.href='https://common-codes.github.io/uTube/watch#vid=${reco.id}';">${reco.title}</p>
                <img style="height: 16px; width: 16px; position: absolute; top: 68px; left: 163px; cursor: pointer;" src="${reco.uploader}" onclick="location.href='https://common-codes.github.io/uTube/c#user=${reco.channel}';">
                <p style="position: absolute; top: 51px; left: 188px; cursor: pointer;" onclick="location.href='https://common-codes.github.io/uTube/c#user=${reco.channel}';">${reco.channel}</p>
            </div><br>
            `
            lists += html
        }
    });
    document.getElementById("recommendations").innerHTML = lists
}