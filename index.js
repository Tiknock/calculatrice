const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

document.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key != "Enter" && e.key != "c") {
        result.textContent += e.key;
        } else if (e.key = "c" && e.key != "Enter") {
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