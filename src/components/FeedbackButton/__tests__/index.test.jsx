import React, { useState } from 'react';
import FeedbackButton from '../index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(() => jest.fn()),
}));

describe('Snapshot', () => {
  it('renders', () => {
    const setState = jest.fn();
    useState.mockImplementation(() => [false, setState]);
    const tree = renderer.create(<FeedbackButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders opened', () => {
    const setState = jest.fn();
    useState.mockImplementation(() => [true, setState]);
    const tree = renderer.create(<FeedbackButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Behavior', () => {
  it('opens the feedback options', () => {
    const setState = jest.fn();
    useState.mockImplementation((init) => [init, setState]);
    const wrapper = mount(<FeedbackButton />);

    wrapper.find('button').at(0).simulate('click');
    expect(setState).toHaveBeenCalledTimes(1);
  });
});
