function calculateBMI() {
    const userWeight = Number(document.getElementById('weight').value);
    const userHeight = Number(document.getElementById('height').value);

    if (userWeight <= 0 || userHeight <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    const heightInMeters = userHeight / 100;
    const heightSquared = heightInMeters * heightInMeters;
    const bmi = userWeight / heightSquared;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    const message = document.getElementById('message');

    if (bmi < 18.5) {
        message.textContent = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message.textContent = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        message.textContent = "Overweight";
    } else {
        message.textContent = "Obesity";
    }
    Card .style.height = "400px";
    card .style.transition = "height 0.5s ease";
    card .style.overflow = "hidden";
}
