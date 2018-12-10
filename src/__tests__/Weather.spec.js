import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Weather from '../components/Weather/Weather';

Enzyme.configure({ adapter: new Adapter() });

describe(" check weather component", () => {
    it('check if Weather component have required fields', () => {
        const wrapper = shallow(<Weather />);
        // console.log(wrapper.debug());
        expect(wrapper.find('.weather_data')).toHaveLength(4);
    });
});