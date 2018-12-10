import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, before } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from '../components/Form/Form';
import SubmitButton from '../components/Form/Submit';
import sinon ,{ spy } from 'sinon';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('<Form />', () => {

  it('renders form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
  });
// const onSubmit = sinon.spy();
// const wrapper = mount(
//     <Form onSubmit={onSubmit} />
// );
// const button = wrapper.find('button');
// button.simulate('submit');

// wrapper.find('Input #city').getElement().value = 'delhi';

// expect(wrapper.find('Input #city').get(0).value).to.equal("delhi");


it('simulate form submit action', () => {
  const getWeather = jest.fn();
  const component = mount(<Form onSubmit={getWeather}/>);
  component.find(SubmitButton).simulate('submit', { getWeather });
  expect(toJson(component)).toMatchSnapshot();
  // expect(getWeather).toBeCalled();
});

});