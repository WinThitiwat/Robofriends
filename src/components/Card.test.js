import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

// Test if we're able to render something that 
// in this case, expect to render only 1 Card component
it('expect to render Card component', () => {
  // expect(shallow(<Card />).length).toEqual(1)
  expect(shallow(<Card />)).toMatchSnapshot();
  
});


// console.log(shallow(<Card/>));