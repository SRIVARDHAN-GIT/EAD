const chessboard = document.getElementById('chessboard');

const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
  ];
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    if ((row + col) % 2 === 0) {
      square.classList.add('green');
    } else {
      square.classList.add('blue');
    }

    const piece = initialBoard[row][col];
    if (piece) {
      const pieceElement = document.createElement('span');
      pieceElement.textContent = piece;
      pieceElement.classList.add(piece === piece.toUpperCase() ? 'green-piece' : 'blue-piece'); 
      square.appendChild(pieceElement);
    }

    chessboard.appendChild(square);
  }
}