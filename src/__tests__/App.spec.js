import Enzyme, { shallow , mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import SubmitButton from '../Components/Form/Submit';
import React from 'react';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('check if App have Submit button', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(SubmitButton)).toHaveLength(1);
    });
  });