function welcome(){

alert("Welcome to Aimakz Fashion Boutique!");

}

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Item added to cart!");

});

});