let currentPlayer = 'X';
const board = Array(9).fill(null);

function makeMove(index) {
    if (board[index] || checkWinner()) return;
    board[index] = currentPlayer;
    const buttons = document.querySelectorAll('.cell');
    buttons[index].textContent = currentPlayer;
   
    if (checkWinner()) {
        document.getElementById('check').textContent=` Player ${currentPlayer} has won !`;
    } else if (board.every(cell => cell)) {
        document.getElementById('check').textContent=` Game is tie`;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('check').textContent=` Player ${currentPlayer} turn !`;
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]  
    ];

    for (let [a, b, c] of winPatterns) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    board.fill(null);
    const buttons = document.querySelectorAll('.cell');
    buttons.forEach(button => {
        button.textContent = '';
        button.style.backgroundColor = '';
    });
    currentPlayer = 'X';
}