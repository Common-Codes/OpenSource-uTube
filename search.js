function showResults(){
            const resulter = document.querySelector(".gridz");
            const fragment = new URLSearchParams(window.location.search.slice(1));
            const [query, filter] = [fragment.get("q"), fragment.get("filter")];

            if(query != null){
                store.collection("vid").where("search", "array-contains", query)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const rdata = doc.data()
                        document.title = `Search results for ${query} | uTube`
                        document.getElementById("headersa").innerText = `Search Results for ${query}`
                        resulter.innerHTML += 
                        `
                        <div> 
                            <div onclick="location.href='https://common-codes.github.io/uTube/watch/#vid=${rdata.id}'" class="slot" title="Watch ${rdata.title}">
                                <div class="banner">
                                    <img class="banner-img" src="${rdata.vod}">
                                </div>
                                <div class="image">
                                    <img class="image-img" src="${rdata.uploader}">
                                </div>
                                <div class="video-descriptors">
                                    <div class="video-desc">
                                        <div class="video-name" style="cursor: pointer;">${rdata.title}</div>
                                        <div class="owner-descriptors">
                                            <div>
                                                <p class="video-id">${rdata.channel}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    })
                }).catch((err) => console.log(err))
            }
}

function searchFunction(){
    let query = document.getElementById("querygo").value;
    location.href=`https://common-codes.github.io/uTube/search/?q=${query}`;
}