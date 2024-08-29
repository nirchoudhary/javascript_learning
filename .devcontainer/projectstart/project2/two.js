const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const Guide = document.querySelector("#Guide");

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please provide a valid height";
        Guide.innerHTML = ""; // Clear the guide if there's an error
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please provide a valid weight";
        Guide.innerHTML = ""; // Clear the guide if there's an error
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            Guide.innerHTML = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            Guide.innerHTML = "Normal Range";
        } else {
            Guide.innerHTML = "Overweight";
        }
    }
});





