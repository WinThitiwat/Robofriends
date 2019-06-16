import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(prop)
        this.state = {
            hasError: false
        }
    }

    // change `hasError` state when it sees error (like try catch)
    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops. That is not good</h1>
        }
        return this.prop.children;
    }
}
export default ErrorBoundary;


// import React, { Component } from 'react';

// class ErrorBoundary extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             hasError: false
//         }
//     }

//     componentDidCatch(error, info){
//         this.setState({hasError:true})
//     }

//     render(){
//         if (this.state.hasError){
//             return <h1>Oops, this is not good.</h1>
//         }
//         return this.props.children
//     }
// }


// export default ErrorBoundary;
