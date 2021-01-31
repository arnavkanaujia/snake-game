let inputdir={x:0,y:0};
let lastdir={x:0,y:0};
window.addEventListener('keydown',e =>{
    switch (e.key)
    {
        case "ArrowUp":
            if(lastdir.y!==0) break
         inputdir={x:0,y:-1};
        break
        case "ArrowDown": 
        if(lastdir.y!==0) break

         inputdir={x:0,y:1};
        break
        case "ArrowRight": 
        if(lastdir.x!==0) break

        inputdir={x:1,y:0};
        break
        case "ArrowLeft": 
        if(lastdir.x!==0) break

         inputdir={x:-1,y:0};
        break
        

    }

})
export function getinpt(){
    lastdir=inputdir
    return inputdir
}
