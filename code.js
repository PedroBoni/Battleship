var location1 = 3
var location2 = 4
var location3 = 5

var guess;
var hits = 0
var guesses = 0

var isSunk = false

while(isSunk == false){
   guess = prompt("Preparar, apontar, fogo!  (digite um número de 0-6).")
   if(guess < 0 || guess > 6) {
       alert("Digite um número válido")
   }else {
      guesses = guesses + 1
      console.log(guesses)
   }
   if(guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1 

      alert("acertou")

      if(hits == 3) {
         isSunk = true
         alert("Você afundou meu navio de guerra.")
      }
   }else{
      alert("errou")
   } 
}
var stats = "Você adivinhou " + guesses + " suposições para afundar o navio de guerra," + 
            " o que significa que sua precisão de tiro foi " + (300/guesses) + "%"
alert(stats)
 
 