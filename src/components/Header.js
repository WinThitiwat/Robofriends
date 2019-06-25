import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {

  // this func comes to every React component
  // It gives us an ability to control this update cycle
  // -- We're forcing for this component never ever update (return false)--
    // shouldComponentUpdate(nextProps, nextState){
  //   return false;

  // }

  render(){
    console.log('Header')
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={'red'}/>
      </div>

    );
  }
}

export default Header;