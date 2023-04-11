export class reload {
    reloadpage() {
        let meow = document.querySelector('.reset');
        meow.addEventListener('click', function () {
            location.reload();
        });
    };
};