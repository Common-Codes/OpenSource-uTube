function showResults(){
            const resulter = document.getElementById("master-div");
            const fragment = new URLSearchParams(window.location.search.slice(1));
            const [query, filter] = [fragment.get("q"), fragment.get("filter")];

            if(query != null){
                console.log("query not null")
                store.collection("vid").where("search", "array-contains", query)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const rdata = doc.data()
                        document.title = `Search results for ${query} | uTube`
                        document.getElementById("headersa").innerText = `Search Results for ${query}`
                        resulter.innerHTML += `<div onclick="location.href='https://common-codes.github.io/uTube/watch/#vid=${rdata.id}'" class="video-data" style="position: relative; left: -5px;"><img src="${rdata.vod}" style="cursor: pointer; height: 90px; width: 150px; position: absolute; left: 5px;"><b class="video-title" style="cursor: pointer; position: absolute; left: 162px; top: 8px;">${rdata.title}</b><img style="width: 21px; height: 21px; position: absolute; left: 165px; top: 64px;" src="${rdata.uploader}"><p style="position: absolute; left: 198px; top: 48px;">${rdata.channel}</p></div><br><br><br><br><br><hr>`
                    })
                }).catch((err) => console.log(err))
            }
}

function searchFunction(){
    let query = document.getElementById("querygo").value;
    location.href=`https://common-codes.github.io/uTube/search/?q=${query}`;
}