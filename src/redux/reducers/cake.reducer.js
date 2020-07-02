const initialState = {
  numOfCakes: 1
};
const cakeReducer = (state = initialState, action) => {  
    switch (action.type) {      
    case "BUY_CAKE":
      return {          
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      };
      case "RESET":
        return {
          numOfCakes:0
        }
    default:
      return state;
  }
};
export default cakeReducer;
