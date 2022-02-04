var modal = document.getElementsByClassName('modal-content')[0];
var closeModal = ()=>{modal.style.opacity = 0;modal.style.pointerEvents = 'none';}
var openModal = ()=>{modal.style.opacity = 1;modal.style.pointerEvents = 'auto';}

var currentElement;

function changeProps(element){
    openModal();
    currentElement = element;
}

var saveModal = ()=>{
    var classes = currentElement.classList;
    var remove = [];
    for(var i=0; i<classes.length; i++){
        if(String(classes[i]).indexOf('bg-')>-1 || String(classes[i]).indexOf('text-')>-1) remove.push(classes[i]);
    }
    for(var i=0; i<remove.length; i++) currentElement.classList.remove(remove[i]);
    currentElement.classList.add('bg-'+localStorage.getItem('backgroundColor'));
    currentElement.classList.add('text-' + localStorage.getItem('color'));
}