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


function isLeap(year) {
    
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

}

/*
console.log(isLeap(2400)); // debería imprimir "Leap year."
console.log(isLeap(1989)); // debería imprimir "Not leap year."
*/

//?3- 