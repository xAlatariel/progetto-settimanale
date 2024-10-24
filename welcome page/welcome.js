const checkbox = document.getElementById("firstCheckbox");
const button = document.getElementById ("acceptButton");

button.addEventListener ("click", function (){
    if (checkbox.checked == true){
        window.location.href = "https://learn.epicode.com/"
    } else { 
        alert("Accept the conditions")
    }
});