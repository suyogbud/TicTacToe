export class Board {

    main() {

        const grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        const board = document.querySelector('.board');

        let player = 'X';

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
            board.appendChild(row);
        }
    }

    handleClick(){
        const row = this.main.getAttribute('data-row');
        const col = this.main.getAttribute('data-cell');
    }

}

/*const myCar = new board()
myCar.main()*/