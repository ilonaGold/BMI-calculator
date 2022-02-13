const calc = document.querySelector(".btn-calculate");
const result = document.querySelector(".result");
const reset = document.querySelector(".btn-reset");
let bmi;

calc.addEventListener("click", calculateBMI);

function calculateBMI(e) {
    e.preventDefault();

    let height = document.querySelector(".height").value;
    let weight = document.querySelector(".weight").value;

    if (height === "") {
        return (result.textContent = "Provide a valid height!")
    } else if (weight === "") {
        return (result.textContent = "Provide a valid weight!")
    } else {
        height = height / 100;
        bmi = (weight / Math.pow(height, 2)).toFixed(1); 
    }

    if (bmi < 18.5) {
        displayResult(`Underweight: <span>${bmi}</span>`, "orange");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        displayResult(`Normal: <span>${bmi}</span>`, "green");
    } else if (bmi >= 25.0 && bmi < 29.9) {
        displayResult(`Overweight: <span>${bmi}</span>`, "blue");
    } else {
        displayResult(`Obese: <span>${bmi}</span>`, "red");
    }

    function displayResult(val, color) {
        result.style.backgroundColor = color;
        return (result.innerHTML = val); 
    }

    reset.style.display = "block";
}

reset.addEventListener("click", () => {
    document.querySelector("form").reset();
    reset.style.display = "none";
    result.style.display = "none";
}) 