export class Click {
    constructor(main) {
        this.grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        this.player = 'X';
        this.clickhandle = this.clickhandle.bind(this);
    }

    clickhandle(event) {
        const row = event.target.getAttribute('data-row');
        const col = event.target.getAttribute('data-cell');

        if (this.grid[row][col] === '') {
            this.grid[row][col] = this.player;
            event.target.innerHTML = this.player;
            event.target.classList.add(this.player);
        }

    }
}