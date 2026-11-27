const button = document.querySelector("button");
const heading = document.querySelector("h1");

button.addEventListener("click", function () {
    heading.textContent = "Welcome, developer!";
});
