// ---------------------------
// Function Demo
// ---------------------------
const greetBtn = document.getElementById("greetBtn");
const greetMessage = document.getElementById("greetMessage");

// Function with parameters and return value
function greetUser(name) {
    const message = `Hello, ${name}! Welcome to Week 7 assignment.`;
    return message;
}

// Button click event
greetBtn.addEventListener("click", function() {
    // Using function and storing return value
    const result = greetUser("Student");
    greetMessage.textContent = result;
});

// ---------------------------
// Animation Demo
// ---------------------------
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", function() {
    // Toggle class to trigger transition
    animateBox.style.transform = "translateX(150px)";
    animateBox.style.backgroundColor = "orange";

    // Trigger keyframe animation
    animateBox.style.animation = "bounce 1s";
    setTimeout(() => {
        animateBox.style.animation = ""; // Reset animation
        animateBox.style.transform = "translateX(0)";
        animateBox.style.backgroundColor = "blue";
    }, 1000);
});

// ---------------------------
// Demonstrate scope
// ---------------------------
function demoScope() {
    let localVar = "I'm local to demoScope";
    console.log(localVar);
}
demoScope();
// console.log(localVar); // Uncommenting this would throw an error: localVar is not defined
