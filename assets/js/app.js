// event for footer menu items click.
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


var drawer = document.querySelector('.drawer');

function addmoney() {
    drawer.classList.add('active');
}

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
        } else {
            /* left swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
            if(drawer.classList.contains('active')) {
                drawer.classList.remove('active');
            }
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};