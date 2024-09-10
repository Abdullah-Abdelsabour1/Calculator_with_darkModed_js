let items = document.querySelectorAll(".buttons span");
let res = document.getElementById("value");
let lastOperationEquals = false;
let darkMode = document.querySelector("#switch");

items.forEach(function(item) {
    
    item.addEventListener("click", function (e) {
        if (item.innerHTML == "=" && res.innerHTML !== "") {
            res.innerHTML = eval(res.innerHTML); 
            lastOperationEquals = true;
        } 
        else if (item.innerHTML == "=") {
            e.preventDefault();
        }
        else if (item.innerHTML == "Clear") {
            res.innerHTML = "";
        }
        else {
            if (lastOperationEquals) {
                // If last operation was '=', start a new expression
                res.innerHTML = item.innerHTML;
                lastOperationEquals = false; // Reset the flag
            } 
            else {
                // Append the value of the clicked item to the current result
                res.innerHTML += item.innerHTML;
            }
        }
    });
});

// Add event listener to the checkbox
darkMode.addEventListener("change", function () {
    // Toggle dark mode class based on checkbox status
    document.body.classList.toggle("dark", darkMode.checked);
});

 if (darkMode.checked) {
     document.body.classList.toggle("dark");
 }

