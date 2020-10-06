import React, { useState as useStateMock } from 'react';
import BacklogCard from '../index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('../../../utils/importAll', () => ({ icons: {} }));

describe('Snapshot', () => {
  it('renderer true', () => {
    useStateMock.mockImplementation(() => [true, () => {}]);

    const tree = renderer.create(<BacklogCard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Events', () => {
  it('simulate closing', () => {
    const setStateSpy = jest.fn();

    useStateMock.mockImplementation(() => [true, setStateSpy]);

    const wrapper = mount(<BacklogCard />);
    wrapper.find('button').at(0).simulate('click');
    expect(setStateSpy).toHaveBeenCalledWith(false);
    expect(setStateSpy).toHaveBeenCalledTimes(1);
  });

  // it('simulate opening', () => {
  //   const setStateSpy = jest.fn();

  //   useStateMock.mockImplementation(() => [false, setStateSpy]);

  //   const wrapper = mount(<BacklogCard />);
  //   wrapper.find('button').at(0).simulate('click');
  //   expect(setStateSpy).toHaveBeenCalledWith(true);
  //   expect(setStateSpy).toHaveBeenCalledTimes(1);
  // });
});
