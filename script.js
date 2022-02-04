localStorage.setItem('backgroundColor','light');
localStorage.setItem('color','dark')

var changeItem = (key,value)=>{
    localStorage.setItem(value,key);
}