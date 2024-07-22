let main=document.querySelector("#c")
let crcr=document.querySelector(".cursor")

main.addEventListener("mousemove",function(el){
   crcr.style.left=el.x+"px"
   crcr.style.top=el.y+"px"
  
})