import React, { Component } from 'react';

class Counter extends Component {
    //Controlled Compoents are those who has
    // no local state,it depends on Parent. 
    
    // state = { 
    //     value:this.props.counter.value,
    //     // imageUrl : 'https://picsum.photos/200'
    //     //tags: ['tag 1','tag 2','tag 3'],
    //    // tags:[]
    //  }
// For Styles
    //  styles = {
    //    fontSize:100,
    //    fontWeight:'bold'
    //  }
//     renderTags() {
//         if(this.state.tags.length ===0)
//         return <p>There is no Tags!</p>
//         return <ul>
//         { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
//    </ul>
//     }
    // handleIncrement = () => {
    //    this.setState({
    //     value:this.state.value + 1
    //    })
    // }
    
    render() { 
      //  console.log('props',this.props);
       return (
           <div>
               {/* <img src={this.state.imageUrl} alt=""/> */}
            {/* <span style={{ fontSize:30 }} className="badge badge-primary m-2">{ this.formatCount() }</span>  */}
            
            
            <span className={ this.getBadgeClasses()}>{ this.formatCount() }</span> 
            <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button> 
            <button 
            onClick={()=> this.props.onDelete(this.props.counter.id)}             
            className="btn btn-danger btn-sm m-2">Delete</button> 
            {/* {this.state.tags.length===0 && "Please Create Tags!"}
            {this.renderTags()} */}
       </div>
        );
    }
     
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ?  'Zero' : value; 
    }
}
 
export default Counter;