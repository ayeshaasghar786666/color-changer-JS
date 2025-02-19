// Function to change the background color randomly
document.getElementById("colorBtn").addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);  // Random color generation
    document.body.style.backgroundColor = randomColor;

    document.querySelector("button").innerText = "Color Changed!";

    setTimeout(function() {
        document.querySelector("button").innerText = "Click to Change Color";
    }, 1000);
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#ffffff";  // Reset to white
    document.querySelector("button").innerText = "Click to Change Color";
});

document.getElementById("colorPicker").addEventListener("input", function() {
    document.body.style.backgroundColor = this.value; 
    document.querySelector("button").innerText = "Color Changed!";

    setTimeout(function() {
        document.querySelector("button").innerText = "Click to Change Color";
    }, 1000);
});
