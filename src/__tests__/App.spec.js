import Enzyme, { shallow , mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import SubmitButton from '../Components/Form/Submit';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    let tree;
    let wrapper;
    beforeAll(() => {
        wrapper = mount(<App />);
        tree = renderer.create(
            <App />
          ).toJSON();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('check if App have Submit button', () => {
      expect(wrapper.find(SubmitButton)).toHaveLength(1);
    });

    it('check if App have City Input Field', () => {
        expect(wrapper.find('Input #city')).toHaveLength(1);
    });

    it('App component should match its empty snapshot', () => {
        expect(tree).toMatchSnapshot();
    });

    it('should pass a selected value to the onChange function', () => {
        wrapper.find('Input #city').simulate('change', { target: {
          value: 'delhi' }
        });
    
        expect(tree).toMatchSnapshot();
      });

  });