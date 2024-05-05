var btn = document.querySelector('.btn')
var ul = document.querySelector('.nav')
var ldash = document.querySelector('.move-left')
var rdash = document.querySelector('.move-right')
var mdash = document.querySelector('.move-none')


btn.addEventListener('click', ()=>{
    ul.classList.toggle('hidden')
    btn.classList.add('clicked')
    console.log(btn.classList)
    ldash.classList.add('move-to-left')
    rdash.classList.add('move-to-right')
    mdash.classList.add('move-to-none')  
})