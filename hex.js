const colors=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color") 
btn.addEventListener("click", function(){
    randomnumber= background();
    document.body.style.backgroundColor=randomnumber;
    color.textContent=randomnumber;
});
function background(){
    let coolor="#";
    for(let i=0;i<6;i++){
    let r= Math.floor(Math.random()*15);
    coolor=coolor+colors[r];
       }
       return coolor;
}

