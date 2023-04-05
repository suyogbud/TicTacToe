export class Board {

    constructor(main) {

        this.grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        this.board = document.querySelector('.board');

        this.player = 'X';
        this.handleClick = this.handleClick.bind(this);
    }


    bmain() {
        let b_row = 3;
        let b_column = 3;

        for (let i = 0; i < b_row; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < b_column; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-row', i);
                cell.setAttribute('data-cell', j);
                cell.addEventListener('click', this.handleClick);
                row.appendChild(cell);
            }
            this.board.appendChild(row);

        }


    }

    handleClick(event) {
        const row = event.target.getAttribute('data-row');
        const col = event.target.getAttribute('data-cell');
        if (this.grid[row][col] === '') {
            this.grid[row][col] = this.player;
            event.target.innerHTML = this.player;
            event.target.classList.add(this.player);
        }
    }

}


