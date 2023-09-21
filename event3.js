window.onload = function(){

    const trigger = document.querySelectorAll(".btns button"); 
    

    trigger.forEach((e, idx)=>{
          //e.innerHTML = idx+"번 버튼"
          e.addEventListener(
              'click', 
              function(event){ 
                  console.log(event.target)
               }
          )
          // 이벤트와 메서드를 연결해주는 함수 / 정적객체, 동적객체
         // e.onClick (X)
    }) 

    function fun(a){
        alert(a);
    }
   
}
