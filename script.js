const input = document.getElementById('input');
const outputbox = document.querySelector('.outputbox') // on associe XX 'outputbox' à classe .outputbox du css

function GetValue() {
    const value = Math.abs(parseFloat(input.value));

    if (!isNaN(value)) {
        const resultatperim = getCircumference(value);
        const resultataire = getArea(value);

        if (value !== 0) {
            document.getElementById("Perimeter").innerHTML =
                `Pour un rayon de ${value}, le périmètre est de ${resultatperim.toFixed(3)} unités`;

            document.getElementById("Area").innerHTML =
                `Pour un rayon de ${value}, l'aire est de ${resultataire.toFixed(3)} unités d'aire`;

            outputbox.style.display ="flex"
        } else {
            document.getElementById("Perimeter").innerHTML = '';
            document.getElementById("Area").innerHTML = '';
            outputbox.style.display = "none"
        }
    } else {
        outputbox.style.display = "none" // On écrit sur la valeure de la classe outputbox, son style, et la valeure de
        document.getElementById("Perimeter").innerHTML = '';
        document.getElementById("Area").innerHTML = '';
    }
}

input.addEventListener('input', GetValue);

function getCircumference(radius) {
    return 2 * Math.PI * radius;
}

function getArea(radius) {
    return Math.PI * (radius ** 2);
}
