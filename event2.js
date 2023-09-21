window.onload = function(){

    const trigger = document.querySelectorAll(".action");  
   

    trigger[0].onclick =function(e){
         console.log(e.target);
         fun(e.target);
    }
    trigger[1].onclick =function(){
         fun("난 두번째 btn");
    }
    trigger[2].onclick =function(){
         fun("난 세번째 내맘대로 쓰기");
    }
    //매개인자
    function fun(a){
        console.log(this); // window
        alert(a);
    }
}