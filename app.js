const wrapper = document.querySelector("#wrapper")

const gameBoard = ((doc) => {
    const boardArray = []

    const createCell = (value) => {
        const  square = document.createElement("div");
        square.setAttribute("squareId", value);
        square.classList.add("squares")
        wrapper.appendChild(square)  
        boardArray.push(square)
    }

    
    return {createCell}
})(document);

gameBoard.createCell("s1")
gameBoard.createCell("s2")
gameBoard.createCell("s3")
gameBoard.createCell("s4")
gameBoard.createCell("s5")
gameBoard.createCell("s6")
gameBoard.createCell("s7")
gameBoard.createCell("s8")
gameBoard.createCell("s9")

const displayController = () => {
    
}

const player = (marker) => {
    
    const writeToDom = (square) => {
        square.addEventListener('click', (e) => {
            e.target.textContent = marker;
        })
    }
    return {writeToDom}
}

const p1 = player('X')

p1.writeToDom(document)

const p2 = player('O')

p2.writeToDom(document)

