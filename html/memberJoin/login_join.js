function onLoad() {
    //패턴 검색 내용 ( /^[a-z|A-Z|0-9_]{3,}$/;  = a-z, A-Z , 0-9 , _ 포함 3글자이상 작성패턴)
    const idPattern = /^[\w]{3,}$/; 
    const pwdPattern = /^[a-zA-Z0-9_]{6,10}$/;  //a-z, A-Z, 0-9, _(언더바) 의 범위안의 숫자를 {6,10} 6글자 이상 10글지 이하로 작성 
    // const pwdPattern = /^[\w]{6,10}$/;   \w = 모든 영소,대문자,숫자,특수문자를 의미
    const namePattern = /^[가-힣]{2,4}|[A-Z]{1}[a-zA-Z\x20]{1,19}$/; //한글 2~4글자, 영문자 첫번째 글자는 대문자 + 뒤에는 소,대문자 1~19글자,  \x20 = 공백을 의미
    const nicknamePattern = /^[\w가-힣]{4,}$/; 
    const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i //이메일 패턴 (검색해서 복붙)
    const telPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
    const mobilePattern = /^010-(?:[\d]{3}|[\d]{4})-[\d]{4}$/
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  


    //객체찾기 
    const inputID = document.querySelector("#input-id");
    const inputPW1 = document.querySelector("#input-pw1");
    const inputPW2 = document.querySelector("#input-pw2");
    const inputName = document.querySelector("#input-name");
    const inputNickname = document.querySelector("#input-nickname");
    const inputEmail = document.querySelector("#input-email");
    const inputTel = document.querySelector("#input-tel");
    const inputMobile = document.querySelector("#input-mobile");
    const inputDate = document.querySelector('[type="date"]');
    //주소 객체 찾기
    const zipcode = document.querySelector("#zipcode");
    const addr1 = document.querySelector("#addr1");
    const addr2 = document.querySelector("#addr2");
    const btnSearchAddr = document.querySelector("#btn-searchAddr");
    //폼 객체찾기 (submit버튼 작동시 전체 검사를 위한 객체)
    const myform = document.querySelector(".myform");

    //validate(inputID, id_pattern, "3글자 이상 입력 바랍니다.") 값 -> validate(userInput, pattern, message) 을 의미함.
    inputID.addEventListener("blur", ()=>validate(inputID, idPattern, "3글자 이상 입력 바랍니다."));
    inputPW1.addEventListener("blur", ()=>validate(inputPW1, pwdPattern, "6글자 이상 10글자 미만 입력 바랍니다."));
    inputPW2.addEventListener("blur", ()=>{
        validate(inputPW2, pwdPattern, "6글자 이상 10글자 미만 입력 바랍니다.");
        if(inputPW1.value !== inputPW2.value){
            inputPW2.nextSibling.textContent =`패스워드가 일치하지 않습니다.`
            inputPW2.nextSibling.style.color = `red`;
            inputPW2.value = "";
            inputPW2.focus();
            return;
          }
        });
    inputName.addEventListener("blur", ()=>validate(inputName, namePattern, "정확하게 입력 바랍니다."));
    inputNickname.addEventListener("blur", ()=>validate(inputNickname, nicknamePattern, "정확하게 입력 바랍니다."));
    inputEmail.addEventListener("blur", ()=>validate(inputEmail, emailPattern, "이메일 양식에 맞춰 정확하게 입력 바랍니다."));
    inputTel.addEventListener("blur", ()=>validate(inputTel, telPattern, "정확하게 입력 바랍니다."));
    inputMobile.addEventListener("blur", ()=>validate(inputMobile, mobilePattern, "정확하게 입력 바랍니다."));
    inputDate.addEventListener("blur", () =>validate(inputDate, datePattern, "날짜를 선택 바랍니다."));
    
    btnSearchAddr.addEventListener("click", () => {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드 (아직 안배움)
                zipcode.value = data.zonecode;
                addr1.value = data.roadAddress;
            }
          }).open();
    });
    //폼 이벤트 등록 및 핸들러 처리 (submit 버튼 작동시 전체객체 검사.)
    myform.addEventListener("submit", (event) => {
        event.preventDefault(); // 이벤트*submit 의 기본 기능을 막는 gkatn
        validate(inputID, idPattern, "3글자 이상 입력 바랍니다.");
        validate(inputPW1, pwdPattern, "6글자 이상 10글자 미만 입력 바랍니다.")
        validate(inputPW2, pwdPattern, "6글자 이상 10글자 미만 입력 바랍니다.")
        if(inputPW1.value !== inputPW2.value){
            inputPW2.nextSibling.textContent =`패스워드가 일치하지 않습니다.`
            inputPW2.nextSibling.style.color = `red`;
            inputPW2.value = "";
            inputPW2.focus();
            return;
          }
        validate(inputName, namePattern, "정확하게 입력 바랍니다.")
        validate(inputNickname, nicknamePattern, "정확하게 입력 바랍니다.")
        validate(inputEmail, emailPattern, "이메일 양식에 맞춰 정확하게 입력 바랍니다.")
        validate(inputTel, telPattern, "정확하게 입력 바랍니다.")
        validate(inputMobile, mobilePattern, "정확하게 입력 바랍니다.") 
        validate(inputDate, datePattern, "날짜를 선택 바랍니다.")
        if (zipcode.value === "" || addr1.value === "") {
            zipcode.nextSibling.textContent = `주소를 정확하게 입력 바랍니다.`
            zipcode.nextSibling.style.fontSize = `10px`;
            zipcode.nextSibling.style.opacity = `0.7`;
            zipcode.nextSibling.style.color = `red`;
            zipcode.focus();
            return;
        }
        confirm(`회원가입을 완료하시겠습니까?`);
    });

    //이벤트 리스너 등록 및 핸들러 처리 (match = 패턴검색 을 도와주는 함수.)
    //(userInput, pattern, message) 값을 지정받을 수 있게 매개변수 지정.
    function validate(userInput, pattern, message) {
        if(userInput.value.match(pattern)) {
            userInput.nextSibling.textContent = ` 성공.`;
            userInput.nextSibling.style.fontSize = `10px`;
            userInput.nextSibling.style.opacity = `0.7`;
            userInput.nextSibling.style.color = `blue`;
            
        } else {
            userInput.nextSibling.textContent = ` ${message}`;
            userInput.nextSibling.style.fontSize = `10px`;
            userInput.nextSibling.style.opacity = `0.7`;
            userInput.nextSibling.style.color = `red`;
            userInput.focus();
            userInput.value = "";
            return;
        }
    }
}