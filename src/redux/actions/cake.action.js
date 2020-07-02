export const buyCake = (number=1) => {     
    return {
        type:"BUY_CAKE",
        payload:number
    }
}


export const reset = () =>{
    return {
        type:"RESET"
    }
}