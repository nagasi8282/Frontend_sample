const board = document.getElementById("board");
const diceText = document.getElementById("dice");
const turnText = document.getElementById("turn");
const statusText = document.getElementById("status");

const snakesAndLadders = {
    17: 6,
    26: 3,
    43: 21,
    55: 33,
    59: 8,
    75: 10,
    97: 1,
    19: 39,
    16: 28,
    30: 50,
    41: 61,
    52: 72,
    63: 83,
    74: 94,
    66: 96
};

let players = [
    { name: "Player 1", pos: 0, class: "player1" },
    { name: "Player 2", pos: 0, class: "player2" }
];

let currentPlayer = 0;

// Create Board
function createBoard() {
    board.innerHTML = "";
    for (let i = 100; i >= 1; i--) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = "cell-" + i;
        cell.innerText = i;
        board.appendChild(cell);
    }
}

function updateBoard() {
    document.querySelectorAll(".cell").forEach(c => {
        c.classList.remove("player1", "player2");
    });

    players.forEach(p => {
        if (p.pos > 0) {
            document.getElementById("cell-" + p.pos).classList.add(p.class);
        }
    });
}

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    diceText.innerText = "Dice: " + dice;

    let player = players[currentPlayer];

    if (player.pos + dice <= 100) {
        player.pos += dice;
    }

    if (snakesAndLadders[player.pos]) {
        let newPos = snakesAndLadders[player.pos];
        if (newPos > player.pos) {
            statusText.innerText = "🪜 Ladder! " + player.pos + " → " + newPos;
        } else {
            statusText.innerText = "🐍 Snake! " + player.pos + " → " + newPos;
        }
        player.pos = newPos;
    } else {
        statusText.innerText = "";
    }

    updateBoard();

    if (player.pos === 100) {
        alert(player.name + " Wins 🎉");
        return;
    }

    if (dice !== 6) {
        currentPlayer = (currentPlayer + 1) % players.length;
    }

    turnText.innerText = players[currentPlayer].name + " Turn";
}
const diceSound = document.getElementById("diceSound");

createBoard();
updateBoard();