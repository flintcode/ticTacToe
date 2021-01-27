const wrapper = document.querySelector("#wrapper")

const gameBoard = (() => {
    const boardArray = []

    const createCell = (value) => {
        const  square = document.createElement("div");
        square.id = value;
        square.classList.add("squares")
        wrapper.appendChild(square)  
        boardArray.push(square)
    }    
    return {createCell}
})();

gameBoard.createCell("s1")
gameBoard.createCell("s2")
gameBoard.createCell("s3")
gameBoard.createCell("s4")
gameBoard.createCell("s5")
gameBoard.createCell("s6")
gameBoard.createCell("s7")
gameBoard.createCell("s8")
gameBoard.createCell("s9")

const displayController = (() => {
    const squareEach = document.getElementsByClassName('squares')


    const restart = () => {
        document.getElementById("restart").addEventListener('click', () => {
            for (i = 0; i < squareEach.length; i++) {
                squareEach[i].innerHTML = null;
            }
        })
    }

   

    const writeToDom = () => {

        for (i = 0; i < squareEach.length; i++){
            squareEach[i].addEventListener('click', (e) => {  
                    wrapper.classList.toggle('active')
                    if (document.getElementById("winnerText").textContent == 'Player one is the winner!' || document.getElementById("winnerText").textContent == 'Player two  is the winner!' || 
                    document.getElementById("winnerText").textContent == 'Tie Game!'){
                        e.target.textContent = " ";
                    }
                   if (e.target.textContent){
                    document.getElementById("winnerText").textContent = 'taken';
                   }              
                   else {
                    if (wrapper.classList.contains('active')) {
                        e.target.textContent = "X";
                        document.getElementById("winnerText").textContent = ' ';
                    }  
                    else {
                        e.target.textContent = "O";
                        document.getElementById("winnerText").textContent = ' ';
                    }
                   
                   }  

                if ((document.getElementById("s1").textContent == "X" && document.getElementById("s2").textContent == "X"  && document.getElementById("s3").textContent == "X")||
                        (document.getElementById("s4").textContent == "X" && document.getElementById("s5").textContent == "X"  && document.getElementById("s6").textContent == "X")|| 
                        (document.getElementById("s7").textContent == "X" && document.getElementById("s8").textContent == "X"  && document.getElementById("s9").textContent == "X") || 
                        (document.getElementById("s1").textContent == "X" && document.getElementById("s4").textContent == "X"  && document.getElementById("s7").textContent == "X")|| 
                        (document.getElementById("s2").textContent == "X" && document.getElementById("s5").textContent == "X"  && document.getElementById("s8").textContent == "X") || 
                        (document.getElementById("s3").textContent == "X" && document.getElementById("s6").textContent == "X"  && document.getElementById("s9").textContent == "X")||
                        (document.getElementById("s1").textContent == "X" && document.getElementById("s5").textContent == "X"  && document.getElementById("s9").textContent == "X") ||
                        (document.getElementById("s3").textContent == "X" && document.getElementById("s5").textContent == "X"  && document.getElementById("s7").textContent == "X")){
                          
                            document.getElementById("winnerText").textContent = 'Player one is the winner!';


                          
                        } 
                else if ((document.getElementById("s1").textContent == "O" && document.getElementById("s2").textContent == "O"  && document.getElementById("s3").textContent == "O")||
                (document.getElementById("s4").textContent == "O" && document.getElementById("s5").textContent == "O"  && document.getElementById("s6").textContent == "O")|| 
                (document.getElementById("s7").textContent == "O" && document.getElementById("s8").textContent == "O"  && document.getElementById("s9").textContent == "O") || 
                (document.getElementById("s1").textContent == "O" && document.getElementById("s4").textContent == "O"  && document.getElementById("s7").textContent == "O")|| 
                (document.getElementById("s2").textContent == "O" && document.getElementById("s5").textContent == "O"  && document.getElementById("s8").textContent == "O") || 
                (document.getElementById("s3").textContent == "O" && document.getElementById("s6").textContent == "O"  && document.getElementById("s9").textContent == "O")||
                (document.getElementById("s1").textContent == "O" && document.getElementById("s5").textContent == "O"  && document.getElementById("s9").textContent == "O") ||
                (document.getElementById("s3").textContent == "O" && document.getElementById("s5").textContent == "O"  && document.getElementById("s7").textContent == "O")){
               
                    document.getElementById("winnerText").textContent = 'Player two is the winner!';
                    

               }
               else if (document.getElementById("s1").textContent != "" && document.getElementById("s2").textContent != ""  && document.getElementById("s3").textContent != "" && 
                document.getElementById("s4").textContent != "" && document.getElementById("s5").textContent != ""   && document.getElementById("s6").textContent != "" &&
               document.getElementById("s7").textContent != ""  && document.getElementById("s8").textContent != ""   && document.getElementById("s9").textContent != "" ) {
                document.getElementById("winnerText").textContent = 'Tie Game!';
                  
                }
            })                  
        }
        
    }
        
    return {writeToDom,restart}
})();


displayController.restart()
displayController.writeToDom()


