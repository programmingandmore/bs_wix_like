var dragged;
var drop = document.getElementById('dc');

function isDroppable(element) {
    return element.className.split(' ').filter((i)=>{return i == 'droppable'}).length > 0;
}

document.addEventListener('dragstart', (e)=>{
    dragged = e.target;
    e.target.style.opacity = .5;
    e.dataTransfer.effectAllowed = "copy";

}, false);

document.addEventListener('dragend', (e)=>{
    e.target.style.opacity = "";
}, false);

document.addEventListener('dragover', (e)=>{
    e.preventDefault();
}, false);

document.addEventListener('dragenter', (e)=>{
    if(isDroppable(e.target)){
        e.target.style.border = "2px dashed grey";
    }
}, false)

document.addEventListener('dragleave', (e)=>{
    if(isDroppable(e.target)){
        e.target.style.border = "2px solid black";
    }
}, false)

document.addEventListener('drop', (e)=>{
    console.log('Drop event fired');
    if(isDroppable(e.target)){
        e.target.style.border = "2px solid black";
        var parentNode = dragged.parentNode;
        if(parentNode.getAttribute('id') != 'components-dock') dragged.parentNode.removeChild(dragged);
        var cloned = dragged.cloneNode(true);
        cloned.style.opacity = 1;
        e.target.closest('.droppable-container').insertBefore(cloned, e.target);
        e.target.style.marginTop = "1rem";
        changeProps(cloned);
    }
}, false)