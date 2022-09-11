window.onload = function(){
  const loginD = document.getElementById('login');
  const user = firebase.auth().currentUser;
  if(user){
    store.collection('c').doc(user.uid).get().then(doc => {
      const html =
      `
      <button style="position: absolute; top: -21px; right: 36px; border: none;" aria-label="Account profile photo">
        <img href="/login.html" alt="Avatar image" src="${doc.data().img}" style="width: 22px; height: 22px; border-radius: 50%;">
      </button>
      `;
      
      loginD.innerHTML = html;
    })
  
  } else{
    console.log("user not logged in");
  }
}

function loginFunction() {
    const loginD = document.getElementById('login');
    
    const user = firebase.auth().currentUser; 
    if(user){
          store.collection('c').doc(user.uid).get().then(doc => {
            const html =
            `
            <button onclick="location.href='https://common-codes.github.io/uTube/c/@me'" style="background-color: black; position: absolute; top: -21px; right: 36px; border: none;" aria-label="Account profile photo">
              <img href="/login.html" alt="Avatar image" src="${doc.data().img}" style="width: 32px; height: 32px; border-radius: 50%;">
            </button>
            `;
            
            loginD.innerHTML = html;
      })
        
    } else{
      location.href="/login.html"
  }
}