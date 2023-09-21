window.onload = function(){

    const trigger = document.querySelector(".action");

    //매개인자없는 함수
    // trigger.onclick = fun;
    // function fun(){
    //     alert("일반함수실행한거")
    // }
    
    document.getElementById("dan").focus();
    //input에 커서를 넣어라

    trigger.onclick =function(){
         fun("값은실행식에서 쓰기");
    }
    //매개인자
    function fun(a){
        alert(a);
    }
}