import React, {Component} from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import Header from '../components/Header';

import './MainPage.css';

class MainPage extends Component {
    // we don't need the constructor anymore
    // becuz there's no more states, these robots are going to be returned as part of the props from onRequestRobots()
    // this make render change by adding `robots`, `isPending`
    
    // constructor(){ 
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchField: "" // since Redux can replace the App state, so we dont need this;
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
  
    filterRobots = () => {
      return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      })
    }
    
    render(){
        const {onSearchChange,isPending} = this.props
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
                        <CardList robots={this.filterRobots()}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
  }
} 

// in connect, listen to this part of the state  (mapState), and i'm interested in this action (mapDispatch)
// and then get those props to the App
export default MainPage;

