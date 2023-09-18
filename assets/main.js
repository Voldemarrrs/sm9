
document.addEventListener('keydown',function(event){
    if('r' == event.key.toLowerCase()){
      document.body.style.background = 'red'
    } 
})

document.addEventListener('keyup',function(event){
    if('r' == event.key.toLowerCase()){
        document.body.style.background = 'white'
    } 
})

document.addEventListener('keydown',function(event){
    if('g' == event.key.toLowerCase()){
        document.body.style.background = 'green'
    } 
})
document.addEventListener('keyup',function(event){
    if('g' == event.key.toLowerCase()){
        document.body.style.background = 'white'
    } 
})

document.addEventListener('keydown',function(event){
    if('b' == event.key.toLowerCase()){
        document.body.style.background = 'blue'
    } 
})
document.addEventListener('keyup',function(event){
    if('b' == event.key.toLowerCase()){
        document.body.style.background = 'white'
    } 
})




// part 2
let box2 = document.querySelector('.box2')
document.addEventListener('keydown',function(event){
    if(event.key == 'w'){
        box2.style.top = box2.offsetTop - 1 + 'px'
    }
})

document.addEventListener('keydown',function(event){
    if(event.key == 's'){
        box2.style.top = box2.offsetTop + 1 + 'px'
    }
})

document.addEventListener('keydown',function(event){
    if(event.key == 'd'){
        box2.style.left = box2.offsetLeft + 1 + 'px'
       
    }
})

document.addEventListener('keydown',function(event){
    if(event.key == 'a'){
        box2.style.left = box2.offsetLeft - 1 + 'px'
    }
})





