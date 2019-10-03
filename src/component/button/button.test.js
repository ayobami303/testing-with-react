import React from 'react';
import { shallow } from 'enzyme';
import SharedButton from "./index";
import { findByTestAttr, checkProps } from "./../../../utils";


const setUp = (props = {}) => {
    const component = shallow(<SharedButton { ...props }/>);
    return component;
};

describe('SharedButton Componwnt', () => {
    let component;
    let mockFunction; 
    beforeEach(() => {
        mockFunction = jest.fn();
        const expectedProps = {
            buttonText: 'Example Button Text',
            emitEvent: mockFunction
        };
        component = setUp(expectedProps);
    });

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };

            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
    
    describe('Renders', () => {
        it('Should render a button', () => {
            const button = findByTestAttr(component, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    });

    it('Should emit event', () => {
        const button = findByTestAttr(component, 'buttonComponent');
        button.simulate('click');
        const callback = mockFunction.mock.calls.length;
        expect(callback).toBe(1);
    });
});