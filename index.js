const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

document.addEventListener("keydown", (e) => {
    if (e.key != "Enter" && e.key != "Backspace") {
        result.textContent += e.key;
        } else if (e.key = "Backspace" && e.key != "Enter") {
        result.textContent = '';
        } else {
        result.textContent = eval(result.textContent)
        }
})

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent += e.target.id;
    })
})
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent)
})
clear.addEventListener('click', () => {
    result.textContent = '';
})