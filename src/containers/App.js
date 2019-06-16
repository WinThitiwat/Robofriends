import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField} from '../actions';
import {connect} from 'react-redux'; 


// what state I need to listen to and send it out to prop (this case searchField)
const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

// what props I should listen to that are action that need to get dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }   
}
class App extends Component {
    constructor(){ 
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount(){
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(users =>this.setState({robots: users}));
    }


    // that's coming down as props, so we  don't need it
    // onSearchChange=(event)=>{
    //     this.setState({searchField: event.target.value})
    // }
    
    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props
        const filteredRobot = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }) 
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else{
            return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
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
// listen to this state first (mapState), and interested in this action (mapDispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App);

