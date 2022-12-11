const state = {
    grid: Array(5)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
}

const tempWords = ['abstrakt', 
    'abstynent',
    'absurd',
    'absyd',
    'absyncik',
    'absynt',
    'abszach',
    'abszicfajer',
    'abszmak',
    'absznyt',
    'absztyfikant',
    'abszyt',
    'abucht',
    'abudżańczyk',
    'abudżyjczyk',
    'abulik',
    'abundyzm',
    'abur',
    'abuz',
    'abysal',
    'abzac',
    'acan',
    'acanek',
    'acani',
    'acetal',
    'plisa',
    'plita',
    'płosa',
    'plota',
    'płyta',
    'podaż',
    'pogoń',
    'połać',
    'połać',
    'polej',
    'polka',
    'półka',
    'półoś',
    'pomoc',
    'pompa',
    'possa',
    'potka',
    'praca',
    'prana',
    'prasa',
    'pręga',
    'próba',
    'proca',
];


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


    
// function to find the first word in the array
function findFirstWord(words) {
    // find all words with 5 letters
    const words5 = words.filter(word => word.length === 5);
    // log to console the array with 5 letters words
    console.log(words5);
    // return random word from the array
    return words5[Math.floor(Math.random() * words5.length)];
}


function setFirstWord(word) {
    // check if word has lenght of 5
    if (word.length !== 5) {
        alert('Please enter a word with 5 letters');
    } else {
        // set the first word in third row
        for (let i = 0; i < 5; i++) {
            state.grid[2][i] = word[i];
        } 
    }
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
        // verify if input is not null
        if (letter === null) {
            alert('Please enter a letter');
        }
        // verify is input is a letter
        else if (letter.length !== 1 || !letter.match(/[a-z]/i)) {
            alert('Please enter a letter');
        }
        // verify the letter is a single character
        else if (letter.length !== 1) {
            alert('Please enter a single letter');
        } 
        else {
            // Update the box with the letter
            updateBox(letter, row, col);
        }
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


// log to console lenght of the array
console.log(tempWords.length);
startup();
setFirstWord(findFirstWord(tempWords));
//addLetter('A', 3, 4);
addEventListeners();