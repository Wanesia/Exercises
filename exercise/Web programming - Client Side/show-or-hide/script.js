const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("mouseover", function(){
    message.classList.remove('hidden');
});

btn.addEventListener("mouseout", function(){
    message.classList.add('hidden');
});