import React from 'react';
import {shallow}  from 'enzyme';
import App from './App';


//smoke test
it('renders without crashing', () => {
  const wrapper = shallow(<App />);
});

//snapshot test


