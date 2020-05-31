const title=document.querySelector("#title");
title.innerHTML = "Hi! From JS";
console.dir(title);

function handleResize(event) {
    console.log(event);
}

function chgTitleColor(event){
    title.style.color = "red";
}
//windows.addEventListener("resize", handleResize)
//title.addEventListener("click",chgTitleColor);

if (10 === 10) {
    console.log("true");
} else {
    console.log("false");
}

// prompt("몇 살이니?");

 const  CLISKED_CLASS = "clicked";

 function handleClick() {
    /*
     * toggle이 아래와 같은 일을 단순화 기켜 준다.
    const hasClass = title.classList.contains(CLISKED_CLASS);

     if (hasClass) {
         title.classList.remove(CLISKED_CLASS);
     } else {
         title.classList.add(CLISKED_CLASS);
     }
     */
    title.classList.toggle(CLISKED_CLASS);
 }

 function init() {
     title.addEventListener("click", handleClick);
 }

 init();