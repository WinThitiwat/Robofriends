import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux'; 
import Header from '../components/Header';

// what state I need to listen to and send it out to prop (this case searchField)
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// what props I should listen to that are action that need to get dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()) 
    }   
}
class App extends Component {
    // we don't need the constructor anymore
    // becuz there's no more states, these robots are going to be returned as part of the props from onRequestRobots()
    // this make render change by adding `robots`, `isPending`
    
    // constructor(){ 
    //     super()
    //     this.state = {
    //         robots: []
    //         // searchField: "" // since Redux can replace the App state, so we dont need this;
    //     }
    // }

    componentDidMount(){
        // this is called by requestRobots action
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response=>response.json())
        //     .then(users =>this.setState({robots: users}));

        this.props.onRequestRobots()
    }


    // this's coming down as props, so we  don't need it
    // onSearchChange=(event)=>{
    //     this.setState({searchField: event.target.value})
    // }
    
    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props
        const filteredRobot = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }) 
        if( isPending ){
            return <h1>Loading</h1>
        }
        else{
            return(
            <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {/* if CardList(children) goes fails, ErrorBoundary will catch it and have graceful exit boundary  */}
                    <ErrorBoundary> 
                        <CardList robots={filteredRobot}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
} 
    
}
// in connect, listen to this part of the state  (mapState), and i'm interested in this action (mapDispatch)
// and then get those props to the App
export default connect(mapStateToProps, mapDispatchToProps)(App);

