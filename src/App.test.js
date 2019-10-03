import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import App from './App';
import { store } from "./createStore";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from '../utils';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Provider store={store}><App /></Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});


describe('App Component', () => {
	const setUp = (initialState = {}) => {
		const store = testStore(initialState);

		const component = shallow(<App store={store} />).childAt(0).dive();
		console.log(component)
		return component
	};

	let wrapper;
	beforeEach(()=>{
		const initialState = {
			posts: [{
				title: 'Example title 1',
				body: 'Some text'
			}, {
				title: 'Example title 2',
				body: 'Some text'
			}, {
				title: 'Example title 3',
				body: 'Some text'
			}]
		};

		wrapper = setUp(initialState);
	});

	it('Should render without errors', () => {
		const component = findByTestAttr(wrapper, 'appComponent');
		expect(component.length).toBe(1);
	});

	it('exampleMethod_updateState should update state as expected', () => {
		const classInstance = wrapper.instance();
		classInstance.exampleMethod_updateState();
		const newState = classInstance.state.hideBtn;
		expect(newState).toBe(true);
	});

	it('exampleMethod_returnsAValue should update state as expected', () => {
		const classInstance = wrapper.instance();
		const newValue = classInstance.exampleMethod_returnsAValue(6);
		expect(newValue).toBe(7);
	});
})