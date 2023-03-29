let board = document.querySelector('.board')
for(let i = 0; i<=9; i++){

    let newDiv = document.createElement('div');
    
    newDiv.setAttribute('class','cell');
    newDiv.innerHTML = "This is the content of the new div."
    
    board.appendChild(newDiv);
}