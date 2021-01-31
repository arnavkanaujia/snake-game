import{snake_speed ,update as update_snake ,draw as draw_snake,getsnakehead,snakeintersection} from './snake.js'
import {  update as update_food, draw as draw_food } from './food.js'
import{outsidegrid} from './grid.js'

const board=document.getElementById('gameBoard');
let lastrendertime=0
let gameover=false
function main(currentime){
    if(gameover){
        return alert("you lose")
    }
    window.requestAnimationFrame(main)
    const sec=(currentime-lastrendertime)/1000
    if(sec < 1/snake_speed) return
    
    lastrendertime=currentime
    console.log('snake')
    update()
    draw()
}
window.requestAnimationFrame(main)
function update(){
update_snake()
update_food()
check()

}
function draw(){
    board.innerHTML=''
    draw_snake(board)
    draw_food(board)

    
}
function check(){
    gameover=outsidegrid(getsnakehead()) || snakeintersection()
}