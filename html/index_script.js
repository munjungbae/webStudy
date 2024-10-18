// 객체를 가져온다.
let div_box = window.document.getElementById("box");
let position = 0;

function moveBox() {
    if (position < 200) {
        position += 1;
        div_box.style.left = position +"px";
        // 계속해서 moveBox 기능을 불러주는, 즉 콜백기능을 부여 한다.
    } else {
        position = 0;
        div_box.style.left = position + "px";
    }
    window.requestAnimationFrame(moveBox)
}

moveBox();