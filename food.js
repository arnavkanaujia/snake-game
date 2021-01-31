import{onsnake,expandsnake} from './snake.js'
import{randompos} from './grid.js'

let food =getrandompos()
const exp_rate=1
export function update() {

    if(onsnake(food)){
        expandsnake(exp_rate)
 food = getrandompos()

    }

    




}
export function draw(board) {

    const foodElement = document.createElement('div')
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


}
function getrandompos(){
    let newpos
    while (newpos==null || onsnake(newpos)) {
        newpos=randompos()
        
    }
    return newpos

}