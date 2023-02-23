//?-Ejercicio 1 - Seccion 9 (Clase 6)

function test() {
    var a = "3";
    var b = "8";
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var a = "8" //Respuesta
var b = "3" //Respuesta
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

//?-Ejercicio 2 - Seccion 9 (Clase 14)

/*
//todo: Objetivo - Poner en un prompt el nombre en con su inicial mayuscula y el resto minuscula

let name = "angela";

let name1 = prompt("What is your name?")

let firstChar = name.slice(0,1); //Muestra desde la primera palabra del nombre.

let upperCaseFirstChar = firstChar.toUpperCase(); //Muestra la primer letra mayuscula del nombre
let restOfName = name.slice(1,name.length); //Mostrara solo lo que sigue despues del nombre

restOfName = restOfName.toLowerCase(); //Para que no haya problemas muestra el resto de las letras en minuscula

let capitalisedName = upperCaseFirstChar + restOfName; //Mostrara el nombre con inicial mayuscula + el resto del nombre

alert("Hello" + capitalisedName); // Muestra el mensaje + el nombre con la concatenacion.
 */

//?-Ejercicio 3 - Seccion 9 (Clase 14)

//Este ejercicio muestra contar la edad de un perro a humano

/*
function humanAge (dogAge) {
    let humanAge = ((dogAge - 2) * 4) + 21;
    return humanAge;
}

console.log(humanAge(5));
*/

//?-Ejercicios 4,5 y 6 - Seccion 9 (Clase 18) (Probarlo en la pagina: https://stanford.edu/~cpiech/karel/ide.html)

//4-Poder mover el cuadro en la fila 1, columna 5

/*
function main(){
   
    moveFourTimes();
    turnLeft();
    moveFourTimes();
    
    }
    
    function moveFourTimes(){
       move();
       move();
       move();
       move();
    }
*/

//5-Mover el cuadro en linea recta y que cada vez que pase el cuadro ponga una figura para llegar a la fila 1 y columna 5

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
/*
function main(){
    putBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
 }
 
 function diagonalMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }
*/

//6- Que el cuadro pase por cada uno de los espacio y que deje uno vacio y otro con un figura hasta que termine el cuadro

/*
function main(){
    beepersRight();
      goUpTurnLeft();
      beepersLeft();
      goUpTurnRight();
         beepersRight();
      goUpTurnLeft();
      beepersLeft();
      goUpTurnRight();
         beepersRight();
   }
   
   function goUpTurnRight() {
      turnRight();
      move();
      turnRight();
   }
    
   function goUpTurnLeft() {
      turnLeft();
      move();
      turnLeft();
   }
    
   function beepersRight() {
      putBeeper();
      move();
      move();
      putBeeper();
      move();
      move();
      putBeeper();  
   }
    
   function beepersLeft() {
      move();
      putBeeper();
      move();
      move();
      putBeeper();
      move();
   }
/**/ 

//?-Ejercicios 7- Seccion 9 (Clase 22)

//Calcula cuanto gastarias por cada botella de leche y redondealo el numero

/*
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numberOfBottles = Math.floor(money/ 1.5) ;
    
  console.log("buy " + numberOfBottles + " bootles of Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);
*/

//?-Ejercicios 7- Seccion 9 (Clase 23)

// Para el ejercicio: Tomará su edad actual como entrada y console.logs un mensaje con nuestro tiempo restante 
//en este formato: Le quedan x días, y semanas y z meses. 
// Donde x, y y z se reemplazan con los números calculados reales. 
//Para este desafío, suponga que hay 365 días en un año, 52 semanas en un año y 12 meses en un año.

/*
function lifeInWeeks(age) {

        
    let yearsRemaining = 90 - age;
    const days = yearsRemaining * 365;
    const weeks = yearsRemaining * 52;
    const months = yearsRemaining * 12;
    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    
    }


    console.log(lifeInWeeks(25));
*/

//?-Ejercicios 7- Seccion 9 (Clase )



