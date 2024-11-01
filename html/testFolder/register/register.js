
function onload() {

    // 화면객체 가져오기
let slideShow = document.querySelector(".slideShow");
let slideShow_img = document.querySelector(".slideShow_img");
let slideArray = document.querySelectorAll(".slideShow_img a");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let indicatorArray = document.querySelectorAll(".slideShow_indicator a");

// 현재 사진 이미지 인덱스 저장을 위한 current 인덱스, 인터벌ID, 슬라이드 개수
let currentIndex = 0;
let timerID = null;
let slideCount = slideArray.length;

// 현재 이미지를 한줄로 정렬
for(let i=0; i<slideCount; i++) {
    let newLeft = `${i*100}%`
    slideArray[i].style.left = newLeft;
}

//화면 전환해주는 함수.
function gotoslide(index) {
currentIndex = index;
let newLeft = `${index* -100}%`;
slideShow_img.style.left = newLeft;

//indecator 그 위치르 가르켜 줘야 한다.
for (let i=0; i<slideCount; i++) {
    indicatorArray[i].classList.remove('active');
}
indicatorArray[index].classList.add('active'); 
}

//3초마다 gotoslide 호출, 호출 시 인덱스 값을 0,1,2,3,0,1,2,3... 식으로 호출.
function startTimer() {
    timerID = setInterval(() => {
        let index = (currentIndex + 1) % slideCount;
        currentIndex = index;
        gotoslide(index);
    }, 3000);
}
startTimer();

slideShow_img.addEventListener("mouseenter", (event) => {
    clearInterval(timerID);
});
slideShow_img.addEventListener("mouseleave", (event) => {
    startTimer();
});

prev.addEventListener("mouseenter", (event) => {
    clearInterval(timerID);
});

prev.addEventListener("mouseleave", (event) => {
    startTimer();
});

next.addEventListener("mouseenter", (event) => {
    clearInterval(timerID);
});

next.addEventListener("mouseleave", (event) => {
    startTimer();
});

prev.addEventListener("click", (event)=> {
    event.preventDefault(); // anchor tag 가지고 있는 페이지 이동 기본기능을 막는함수
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = slideCount-1;
    }
    gotoslide(currentIndex);
})

next.addEventListener("click", (event)=> {
    event.preventDefault(); // anchor tag 가지고 있는 페이지 이동 기본기능을 막는함수
    currentIndex = currentIndex + 1;
    if (currentIndex > slideCount-1) {
        currentIndex = 0;
    }
    gotoslide(currentIndex);
})

// for(let i=0; i<slideCount; i++) {
//     indicatorArray[i].addEventListener("mouseenter", (event) => {
//         clearInterval(timerID);
//     })
// }  

indicatorArray.forEach((obj)=>{
    obj.addEventListener("mouseenter", (event) => {
        clearInterval(timerID);
    })
})

// for(let i=0; i<slideCount; i++) {
//     indicatorArray[i].addEventListener("mouseleave", (event) => {
//         startTimer();
//     })
// }  

indicatorArray.forEach((obj)=>{
    obj.addEventListener("mouseleave", (event) => {
        startTimer();
    })
})

for(let i=0; i<slideCount; i++) {
    indicatorArray[i].addEventListener("click", (event) => {
        event.preventDefault();
        gotoslide(i);
    })
}    

indicatorArray.forEach()
    
    const idPattern = /^[\w]{3,}$/; 
    const idmailPattern = /^@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const pwdPattern = /^[a-zA-Z0-9_]{6,10}$/;  //a-z, A-Z, 0-9, _(언더바) 의 범위안의 숫자를 {6,10} 6글자 이상 10글지 이하로 작성 
    const namePattern = /^[가-힣]{2,4}|[A-Z]{1}[a-zA-Z\x20]{1,19}$/; //한글 2~4글자, 영문자 첫번째 글자는 대문자 + 뒤에는 소,대문자 1~19글자,  \x20 = 공백을 의미
    const yearPattern = /^\d{4}$/;
    const monthPattern = /^d[1-12]{1,2}$/;
    const dayPattern = /^d[1-31]{1,2}$/;
    const genderPattern = /^[가-힣]{2}$/;
    const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const mobilePattern = /^010-(?:[\d]{3}|[\d]{4})-[\d]{4}$/

    //객체 찾기
    const inputID = document.querySelector("#input-id");
    const inputIdEmail = document.querySelector("#input-id");
    const inputPW1 = document.querySelector("#input-pw1");
    const inputPW2 = document.querySelector("#input-pw2");
    const inputName = document.querySelector("#input-name");
    const inputYear= document.querySelector("#year");
    const inputMonth = document.querySelector("#month");
    const inputDay = document.querySelector("#day");
    const inputGender = document.querySelector("#gendet");
    const inputEmail = document.querySelector("#input-email");
    const inputMobile = document.querySelector("#input-mobile");
}

