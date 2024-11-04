function onload() {

    const inputID = document.querySelector("#id");
    const inputPwd1 = document.querySelector("#pwd1");
    const inputPwd2 = document.querySelector("#pwd2");
    
    inputID.addEventListener("blur", () => message(inputID,`필수 입력 항목입니다.`));
    inputPwd1.addEventListener("blur", () => message(inputPwd1,`필수 입력 항목입니다.`));
    inputPwd2.addEventListener("blur", () => message(inputPwd2,`필수 입력 항목입니다.`));
    
    inputPwd1.addEventListener("click", () => {
        inputPwd1.nextSibling.textContent = `영문자 대/소문자 특수문자,숫자포함 8~32자`;
        inputPwd1.nextSibling.style.fontSize = `10px`;
        inputPwd1.nextSibling.style.display = `flex`;
        inputPwd1.nextSibling.style.justifyContent = `end`;
        inputPwd1.nextSibling.style.opacity = `0.6`;
    })


    function message (userInput,message) {
        if(userInput.value === "") {
            userInput.nextSibling.textContent = `${message}`;
            userInput.nextSibling.style.fontSize =`10px`;
            userInput.nextSibling.style.display = `flex`;
            userInput.nextSibling.style.justifyContent = `end`;
            userInput.nextSibling.style.opacity = `0.6`;
            userInput.focus();
        }
        else {
            userInput.nextSibling.textContent = `성공`;
            userInput.nextSibling.style.fontSize =`10px`;
            userInput.nextSibling.style.display = `flex`;
            userInput.nextSibling.style.justifyContent = `end`;
            userInput.nextSibling.style.opacity = `0.6`;
        }
    }
}