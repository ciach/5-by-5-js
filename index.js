const state = {
    grid: Array(5)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
}

function updateGrid() {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const box = document.getElementById(`box-${row}-${col}`);
            box.textContent = state.grid[row][col];
        }
    }
}


function drawBox(container, row, col, letter = '') {
    // Draw a box
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box-${row}-${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

function setFirstWord() {
    // Set the first word in the second row
    state.grid[2][0] = 'H';
    state.grid[2][1] = 'E';
    state.grid[2][2] = 'L';
    state.grid[2][3] = 'L';
    state.grid[2][4] = 'O';
    updateGrid();
}

function addLetter(letter, row, col) {
    // update the selected box with the requested letter
    state.grid[row][col] = letter;
    updateGrid();
}

// add funtion to update the box with the user letter after user clicks on the box
function updateBox(letter, row, col) {
    // update the selected box with the requested letter
    state.grid[row][col] = letter;
    updateGrid();
}

function handleBoxClick(event) {
    // Get the row and column from the id of the box
    const boxId = event.target.id;
    const row = parseInt(boxId.split('-')[1]);
    const col = parseInt(boxId.split('-')[2]);

    // Check if the box is empty
    if (state.grid[row][col] === '') {
        // Ask the user for a letter
        const letter = prompt('Enter a letter');
        // Update the box with the letter
        updateBox(letter, row, col);
    }
}

function addEventListeners() {
    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.addEventListener('click', handleBoxClick);
    }
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            drawBox(grid, row, col);
        }
    }
    container.appendChild(grid)
}

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);

    state.grid = Array(5)
        .fill()
        .map(() => Array(5).fill(''));
    updateGrid();
}


function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            drawBox(grid, row, col);
        }
    }
    container.appendChild(grid)
}

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);

    state.grid = Array(5)
        .fill()
        .map(() => Array(5).fill(''));
    updateGrid();
}


startup();
setFirstWord();
addLetter('A', 3, 4);
addEventListeners();