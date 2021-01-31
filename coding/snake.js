import{getinpt} from './input.js'
export const snake_speed=5;
const SNAKE_BODY=[
    {x:11,y:11},
   

]
let newSegment=0
export function update(){
    addSegments()
    const direction =getinpt()
    for(let i=SNAKE_BODY.length-2 ; i>=0; i--){
        SNAKE_BODY[i+1]={...SNAKE_BODY[i]}

    }
    SNAKE_BODY[0].x+= direction.x
    SNAKE_BODY[0].y+= direction.y


    


}
export function draw(board){
    SNAKE_BODY.forEach(segment =>{
        const snakeElement=document.createElement('div')
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    })
    
}
export function expandsnake(amount){
    newSegment+=amount



}
export function onsnake(pos,{ignorehead=false}={}){
    return SNAKE_BODY.some((segment,index) =>{
        if(ignorehead && index===0) return false
        return equalpos(segment,pos)
    })

}
function equalpos(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y
    
}
function addSegments(){
    for(let i=0;i<newSegment;i++){
    SNAKE_BODY.push({...SNAKE_BODY[SNAKE_BODY.length-1]})
    }
    newSegment=0
}
export function getsnakehead(){
    return SNAKE_BODY[0]
}
export function snakeintersection(){
   return onsnake(SNAKE_BODY[0] ,{ ignorehead:true})
}