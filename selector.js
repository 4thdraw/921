window.onload = function(){
    document.getElementById("btn").innerHTML = "글자들어왔나?";
    const btns = document.getElementsByClassName("btn");
    //console.log(typeof btns); 타입확인 object
    btns.item(0).innerHTML = "성공???";
    //세번째 li만 선택해서 글넣어주세요.

    const lis = document.querySelector("#gnb li:nth-child(3) a");
    lis.innerHTML = "세번째 들어갔나?"

}

//이벤트의 종류
// onClick
// onMouseLeave, onMouseEnter
// onSubmit  -> 폼태그안의 type이 submit 
// onChange  -> input checbox, radio , select
// onFocus  -> input text


