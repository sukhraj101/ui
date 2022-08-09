// event delegation for footer menu items click.
var menuItems = document.querySelectorAll('.f__menu__item');
menuItems.forEach( item => {
    item.addEventListener('click', function() {
        if(this.classList.contains('active')) {
            menuItems.forEach( n => {n.classList.remove('active')});
        } else {
            menuItems.forEach( n => {n.classList.remove('active')});
            this.classList.add('active')
        }
    });
});

function addmoney() {
    alert()
}