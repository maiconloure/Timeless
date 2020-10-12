import shallow from 'enzyme';
import React, { useState as useStateMock } from 'react';
import {
  useDispatch as useDispatchMock,
  useSelector,
  useSelector as useSelectorMock,
} from 'react-redux';
import renderer from 'react-test-renderer';

import Landing from '../index';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((init) => [init, jest.fn()]),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer.create(<Landing />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
