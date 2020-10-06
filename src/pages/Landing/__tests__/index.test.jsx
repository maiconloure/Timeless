import React, { useState as useStateMock } from 'react';
import { useDispatch as useDispatchMock, useSelector as useSelectorMock } from 'react-redux';
import Landing from '../index';
import renderer from 'react-test-renderer';
import shallow from 'enzyme';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../utils/importAll', () => ({ icons: {} }));

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer.create(<Landing />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
