function loginFunction() {
    const loginD = document.getElementById('login');
    
    const user = firebase.auth().currentUser;
    const yeid = sessionStorage.getItem('uid');
    if(user){
          store.collection('c').doc(user.uid).get().then(doc => {
            const html =
            `
            <button onclick="location.href='https://common-codes.github.io/uTube/c/@me'" style="background-color: black; position: absolute; top: -21px; right: 36px; border: none;" aria-label="Account profile photo">
              <img href="https://common-codes.github.io/uTube/login.html" title="Channel Image" alt="Avatar Image" src="${doc.data().img}" style="cursor: pointer; width: 32px; height: 32px; border-radius: 50%;">
            </button>
            `;
            
            loginD.innerHTML = html;
      })
        
    } else if(yeid != null){
      console.log('backup')
      store.collection('c').doc(yeid).get().then(doc => {
        const html =
        `
        <button onclick="location.href='https://common-codes.github.io/uTube/c/@me'" style="background-color: black; position: absolute; top: -21px; right: 36px; border: none;" aria-label="Account profile photo">
          <img href="/login.html" title="Channel Avatar" alt="Avatar image" src="${doc.data().img}" style="cursor: pointer; width: 32px; height: 32px; border-radius: 50%;">
        </button>
        `;
        
        loginD.innerHTML = html;
    })
    }else{
      console.log("no auth")
  }
}