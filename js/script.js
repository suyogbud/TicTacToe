import { Click } from "./check.js";
export class Board {

    constructor(main) {
        this.board = document.querySelector('.board');
        this.clickfnc = new Click();
        this.click = this.clickfnc.clickhandle;
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
                cell.addEventListener('click', this.click);
                row.appendChild(cell);
            }
            this.board.appendChild(row);
        }
    }

}


