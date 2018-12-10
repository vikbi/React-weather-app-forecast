import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Submit from '../components/Form/Submit';

Enzyme.configure({ adapter: new Adapter() });

describe('<Submit />', () => {
  it('renders <SubmitButton /> button without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Submit />, div);
  });

});
