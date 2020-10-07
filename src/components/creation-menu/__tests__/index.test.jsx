import React from 'react';
import CreationMenu from '../index';
import renderer from 'react-test-renderer';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => {
  useDispatch: jest.fn();
});

jest.mock('../../../utils/importAll', () => ({ icons: {} }));

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer.create(<CreationMenu />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
