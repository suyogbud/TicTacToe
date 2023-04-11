import { Board } from "./script.js";
export class Click {
    constructor(main) {
        this.grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.row;
        this.col

        this.player = 'X';
        this.clickhandle = this.clickhandle.bind(this);
    }

    clickhandle(event) {
        this.row = event.target.getAttribute('data-row');
        this.col = event.target.getAttribute('data-cell');

        if (this.grid[this.row][this.col] === '') {
            this.grid[this.row][this.col] = this.player;
            event.target.innerHTML = this.player;
            event.target.classList.add(this.player);
            if (this.checkWin()) {
                alert(`${this.player} wins!`)
            }else if(this.checkTie()){
                alert(`It's a tie!`)
                const nboard = new Board();
                const block = document.createElement('div');
                block.appendChild(nboard.board);
            }else{
                this.player = this.player === 'X' ? 'O':'X';
            }
        }
    }

    checkWin() {
        const winningCombinations = [[[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
        ];
        const x = this.row;
        const y = this.col;


        return winningCombinations.some(combination => {
            return combination.every(coords => {
                const [x, y] = coords;
                return this.grid[x][y] === this.player;
            });
        });
    }

    checkTie() {
        return this.grid.every(row => {
            return row.every(cell => {
                return cell != '';
            });
        })
    }
}