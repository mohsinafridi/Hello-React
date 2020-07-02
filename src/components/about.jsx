import React from "react";
import { buyCake,reset } from "../redux/actions/cake.action";
import { connect } from "react-redux";



const  CakeContainer = ({numOfCakes,buyCake,reset}) => {  
  return (
    <div>
      <p>
        This example will demonstrate How Component is connected to Redux-store.
      </p>

      <div>
    <h2>Number of Cakes: {numOfCakes}</h2>
        <button className="btn btn-primary mr-5" onClick={buyCake}>Buy Cake</button>
        <button className=" btn btn-danger" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {  
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch  =>{
  return {
    buyCake : () => dispatch(buyCake()),
    reset: () => dispatch(reset())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);