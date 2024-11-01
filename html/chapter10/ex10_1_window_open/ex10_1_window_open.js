function onload() {
    
    const btnOpen = window.document.querySelector('#open')
    const btnClose = window.document.querySelector('#close')
    const idObj = window.document.querySelector("#userID");
    const pwdObj = window.document.querySelector("#pwd");
    let win = null;
    
    btnOpen.addEventListener("click", () => {
      win = window.open("./ex8_2_form.html", " _blank", "width=400, height=400, left=30, top=30");
      setTimeout(() =>{
        win.document.querySelector("#userID").value = idObj.value;
        win.document.querySelector("#pwd").value = pwdObj.value;
        },100);
      }
    )
        
    btnClose.addEventListener("click", () => {
          win.close();
      }
    )
}