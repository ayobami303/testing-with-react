import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { checkProps, findByTestAttr } from '../../../utils';


describe('ListItem Component', () => {
    describe('Checking propTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'List Item',
                desc: 'List item description'
            };

            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'List item description'
            };

            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should render without an error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render title', () => {
            const component = findByTestAttr(wrapper, 'componentTitle');
            expect(component.length).toBe(1);
        });

        it('Should render description', () => {
            const component = findByTestAttr(wrapper, 'componentDescription');
            expect(component.length).toBe(1);
        });
    });

    describe('Component wont Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'List item description'
            };

            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should not render without title', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    });
});