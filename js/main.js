var elInp = document.querySelector(".inp")
var elTitle = document.querySelector(".title")

function fn(){
    if(elInp.value % 3 == 0 && elInp.value % 7 == 0){
    elTitle.textContent = "FizzBuzz";
    }else if(elInp.value % 3 == 0){
    elTitle.textContent = "Fizz";
    }else if(elInp.value % 7 == 0){
    elTitle.textContent = "Buzz";
    }else{
        elTitle.textContent = "3 va 7ga bo`linmayadi";
    }
}   
