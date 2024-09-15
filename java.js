function size1(){
   document.querySelector("div").classList.remove("s"); 
document.querySelector("div").classList.add("ss");

}
function size2(){
    document.querySelector("div").classList.remove("ss"); 
    document.querySelector("div").classList.add("s")
}


document.querySelector(".biger").onclick=size1;
document.querySelector(".smaller").onclick=size2;