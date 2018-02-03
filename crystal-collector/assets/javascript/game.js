$(document).ready(function() {

           // Storing variables for later use in functions
           var blue = Math.floor(Math.random() * 11 + 1);
           var green = Math.floor(Math.random() * 11 + 1);
           var pink = Math.floor(Math.random() * 11 + 1);
           var yellow = Math.floor(Math.random() * 11 + 1);
           var userTotal = 0;
           var wins = 0;
           var losses = 0;
           var Random;

           // Selects a random number 19 - 120 to be shown at the start of the game 
           var Random = Math.floor(Math.random() * 101 + 19)

           // Appending random number to the randomNumber id in the html doc
           $('#randomNumber').html(Random);

           //  Decaring variables for scoreboard
           $('#numWins').html(wins);
           $('#numLosses').html(losses);
           
           // Resets the game
           function reset() {
               Random = Math.floor(Math.random() * 101 + 19);
               console.log(Random);
               $('#randomNumber').html(Random);
               blue = Math.floor(Math.random() * 11 + 1);
               green = Math.floor(Math.random() * 11 + 1);
               pink = Math.floor(Math.random() * 11 + 1);
               yellow = Math.floor(Math.random() * 11 + 1);
               userTotal = 0;
               $('#totalScore').html(userTotal);
           }

           // Adds the wins to the userTotal
           function huzzah() {
               alert("You won!");
               wins++;
               $('#numWins').html(wins);
               reset();
           }
           // Adds the losses to the userTotal
           function loser() {
               alert("You lose!");
               losses++;
               $('#numLosses').html(losses);
               reset()
           }

            //sets win/lose conditions
           function endGame() {
            if (userTotal === Random) {
                   huzzah();
               } else if (userTotal > Random) {
                   loser();
               }
           }

           // Sets up click for jewels
           $('#blue').on('click', function() {
               userTotal = userTotal + blue;
               console.log("New userTotal= " + userTotal);
               $('#totalScore').html(userTotal);
                
                endGame();
            })

           $('#green').on('click', function() {
               userTotal = userTotal + green;
               console.log("New userTotal= " + userTotal);
               $('#totalScore').html(userTotal);

               endGame();
           })

           $('#pink').on('click', function() {
               userTotal = userTotal + pink;
               console.log("New userTotal= " + userTotal);
               $('#totalScore').html(userTotal);

               endGame();
           })

           $('#yellow').on('click', function() {
               userTotal = userTotal + yellow;
               console.log("New userTotal= " + userTotal);
               $('#totalScore').html(userTotal);

               endGame();

           });
       });