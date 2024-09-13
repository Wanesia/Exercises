// Get the container element
const numberList = document.getElementById("number-list");

// Loop through numbers from 1 to 20
for (let i = 1; i < 21; i++) {
    // Create a new div element for each number
    const newDiv = document.createElement("div");
    newDiv.classList.add("number");
    newDiv.textContent = i;

    // Check if the number is even or odd and apply the appropriate class
    if (i%2 === 0){
        newDiv.classList.add("even");
    }
    else{
        newDiv.classList.add("odd");
    }
    // Add an event listener to highlight the number when clicked
    newDiv.addEventListener("click",function(){
        
        // Remove highlight from all numbers
        const allDivs = document.querySelectorAll(".number");
        for (let div of allDivs) {
            div.classList.remove("highlight");
        }
        // Add highlight to the clicked number
        newDiv.classList.add("highlight");

    });
    // Append the new div to the container
    numberList.appendChild(newDiv);

}