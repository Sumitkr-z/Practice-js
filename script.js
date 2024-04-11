document.addEventListener("DOMContentLoaded", () => {
    const inputKg = document.querySelector('input[type="text"]');
    const outputLbs = document.querySelector('p:last-of-type');

    inputKg.addEventListener("input", () => {
        const kg = parseFloat(inputKg.value);

        if (!isNaN(kg) && Math.sign(kg) !== -1) {
            const lbs = kg * 2.20462;
            outputLbs.textContent = lbs.toFixed(2);
        } else if (kg < 0) {
            inputKg.value = '';
            alert("Invalid Weight !");
        } else {
            outputLbs.textContent = "0";
        }
    });
});
