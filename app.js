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

    //     const checkWin = (marker) => {
    //         for (i = 0 ; i < squareEach.length; i++) {
    //             squareEach[i].textContent.addEventListener('input', (e) => {
    //                 if (document.getElementById("s1").textContent == marker && document.getElementById("s2").textContent == marker  && document.getElementById("s3").textContent == marker){
    //                     alert ('winner!')
    //                 }
    //             })
    //         }
       
    //  }      
    const restart = (marker) => {
        document.getElementById("restart").addEventListener('click', () => {
            for (i = 0; i < squareEach.length; i++) {
                squareEach[i].innerHTML = null;
            }
        })
    }

    const writeToDom = (marker) => {

        for (i = 0; i < squareEach.length; i++){
            squareEach[i].addEventListener('click', (e) => {  
                
                    if ((document.getElementById("s1").textContent == marker && document.getElementById("s2").textContent == marker  && document.getElementById("s3").textContent == marker)||
                    (document.getElementById("s4").textContent == marker && document.getElementById("s5").textContent == marker  && document.getElementById("s6").textContent == marker)|| 
                    (document.getElementById("s7").textContent == marker && document.getElementById("s8").textContent == marker  && document.getElementById("s9").textContent == marker) || 
                    (document.getElementById("s1").textContent == marker && document.getElementById("s4").textContent == marker  && document.getElementById("s7").textContent == marker)|| 
                    (document.getElementById("s2").textContent == marker && document.getElementById("s5").textContent == marker  && document.getElementById("s8").textContent == marker) || 
                    (document.getElementById("s3").textContent == marker && document.getElementById("s6").textContent == marker  && document.getElementById("s9").textContent == marker)||
                    (document.getElementById("s1").textContent == marker && document.getElementById("s5").textContent == marker  && document.getElementById("s9").textContent == marker) ||
                    (document.getElementById("s3").textContent == marker && document.getElementById("s5").textContent == marker  && document.getElementById("s7").textContent == marker)) {
                        alert ('winner!') // works only if you click again
                        restart(marker)
                    }  

                    wrapper.classList.toggle('active')
                   if (e.target.textContent){
                       alert('taken');
                   }              
                   else {
                    return (wrapper.classList.contains('active')) ?  e.target.textContent = "X":e.target.textContent = "O";  
                   }
                   
            })                  
        }
       
    }

     
    return {writeToDom,restart}
})();

displayController.writeToDom("X")

displayController.restart("X")


const player = () => {
    
    
}



