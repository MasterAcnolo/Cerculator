
// //nombre= prompt("Veuillez entrez une valeure")

// document.getElementById("Output").innerHTML = (getCircumference(input) + " Unités D'Aire")

// function GetValue() {

//     var input = document.getElementById("number").value;

//     // Afficher La valeur
//     input.addEventListener('input', function() {

//         console.log("Changement détecté:", input.value); 
        
//     });

// }



//Chargement = Vide
// Si on modifie la box ca execute GetCircumference avec comme argument le contenu de la box 



const input = document.getElementById('input')

function GetValue(){

    const value = parseFloat(input.value);

    if(!isNaN(value)) {

        const resultatperim = getCircumference(value);
        const resultataire = getArea(value);

        // console.log("Valeur actuelle :" , input.value);
        // console.log(getCircumference(value));

        

        if(value != 0){

            document.getElementById("Perimeter").innerHTML = ("Pour un rayon de " + value + ", le rayon est de " + resultatperim.toFixed(3) + " unités")

            document.getElementById("Area").innerHTML = ("Pour un rayon de " + value +  ", l'aire est de " + resultataire.toFixed(3) + " unités d'aire")
        } else
            document.getElementById("Perimeter", "Area").innerHTML= ''
        
    } else {

        // console.log("Erreur, veuillez entrez une valeure numérique")

    }

    
}

input.addEventListener('input', GetValue);

function getCircumference(radius){

    
    // console.log("Appel de la fonction getCircumference")
    return 2 * Math.PI * radius;
    
}

function getArea(radius){
    return 2 * Math.PI * (radius**2);
}