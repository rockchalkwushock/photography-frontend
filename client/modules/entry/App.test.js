import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('to render to DOM', () => {
  const TestComponent = () => <App />;
  const wrapper = shallow(<TestComponent />);
  expect(wrapper.name()).toEqual('App');
});
