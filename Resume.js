var progressBars = document.querySelector('.skills-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width= 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    for(let bars of progressBars){
        let targetWidth = bars.getAttribute('data-bar-width');
        let currentWidth= 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width= currentWidth + '%';
        }, 50);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone=true;
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}