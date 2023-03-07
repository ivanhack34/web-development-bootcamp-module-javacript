//?-Ejercicio 1 - Unidad 10 (Clase 5)

//BMI Calculator Advanced (IF/ELSE)
//Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

//Write a function that outputs (returns) a different message depending on the BMI.



//BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

//BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

//BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."



//The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

//IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.


/*
function bmiCalculator(weight, height) {
  const bmi = weight / (height * height);
  
const roundedBmi = Math.round(bmi * 10) / 10; // redondear el valor del IMC a un decimal

  if (bmi < 18.5) {
    return "Your BMI is " + roundedBmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + roundedBmi + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + roundedBmi + ", so you are overweight.";
  }
}

console.log(bmiCalculator(150, 5.7));
*/

//Lo que hace es que en una funcion es calcula la peso y altura de la persona
//Donde se crea una variable donde es peso / altura elevado a 2
//Despues haces otra variable para que te de lo mas redondeado y exacto el resultado con Math.Round
//Ahora hacemos una condicion donde si el bmi es menos a 18.5 es bajo el peso
//si es entre 18.5 a 24.9 es peso normal y si es mayo de hay es muy alto
//Finalmente retornas la funcion y pones el peso y la altura que quieres.

//?2-Leap Year Challenge Exercise


//function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here. 
 /*   
      if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
  */

//Aqui esplica el codigo si en esta funcion dependiendo el año, si te toca viciesto es decicir 4 años
//entonces es biciesto y si te toco otro año que no son cada 4 años o un 29 de febrero por ejemplo 
//Entonces si no te debe salir no año biciesto
    

/**************Don't change the code below****************/    

//}

/*
console.log(isLeap(2400)); // debería imprimir "Leap year."
console.log(isLeap(1989)); // debería imprimir "Not leap year."
*/

//?Ejercicio 3 - modulo 10 - (Clase 9)

/*
function fizzBuzz(){
    let output = [];
    let count = 1;

    if(count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }else if(count % 3 === 0){
      output.push("Fizz");
  }
    else if(count % 5 === 0){
        output.push("Buzz");
    }
    else{
      output.push(count);
    }

    count++;
    console.log(output);
}

//Debes probarlo en el inspecto consola de google. Primero se le ponen el valor donde se guardara
//y el otro valor donde se sumara desde 1. Donde se crear una condicion donde si es multiplo de 3 o de 5 dara un mensaje
//Si es solo de 3 o 5 dara un resultado y si no solo aparecera el 1 y se pondra incrementable cada vez que agreges uno nuevo

console.log(fizzBuzz(20));
*/

//?Ejercicio 4 - Modulo 10 (Clase 10)


//function whosPaying(names) {
    
  /******Don't change the code above*******/
      /*
      //Write your code here.
      
        // obtener un número aleatorio entre 0 y la longitud del arreglo de nombres
    let randomIndex = Math.floor(Math.random() * names.length);
    // usar el índice aleatorio para seleccionar un nombre de la lista
    let randomName = names[randomIndex];
    // devolver el mensaje con el nombre seleccionado
    return randomName + " is going to buy lunch today!";
      */
      
  
  
  /******Don't change the code below*******/    
  //}

//Para probarlo:

/*
let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
let selectedName = whosPaying(names);
console.log(selectedName);
*/

//?Ejercicio 5 - Modulo 10 (Clase 14)

/*
let numberOfBottles = 99
while (numberOfBottles >= 0) {
    let bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//lo que hace este codigo es que va a contar en un bucle whilw 99 linea de las botella que recorio o paso en este caso.
//Donde cada vez esta disminuyendo por cada recorrido

console.log(numberOfBottles());
*/

//?Ejercicio 6 - Modulo 10 (Clase 17)
/*
function fibonacciGenerator (n) {
  //Do NOT change any of the code above 👆
      
      //Write your code here:
      
       // asegurarnos de que n sea mayor o igual a 2
     if (n < 2) {
      // devolver un arreglo con los primeros n números si n es menor a 2
      return [0, 1].slice(0, n);
    }
    // crear un arreglo con los primeros dos números de la secuencia
    let fibSeq = [0, 1];
    // generar los siguientes n-2 números de la secuencia y agregarlos al arreglo
    for (let i = 2; i < n; i++) {
      let nextNum = fibSeq[i-2] + fibSeq[i-1];
      fibSeq.push(nextNum);
    }
    // devolver el arreglo completo de la secuencia
    return fibSeq;
      
    
      
      //Return an array of fibonacci numbers starting from 0.
      
  //Do NOT change any of the code below 👇
  }

  //PARA PROBARLA:

  let fibSeq = fibonacciGenerator(10);
console.log(fibSeq);
*/


  
  