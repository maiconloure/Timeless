import React from 'react';
import { useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import FeedContainer from '../index';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Renders', () => {
  beforeEach(() => {
    useSelector.mockImplementation(() => ['test1', 'test2']);
  });

  it('add new messages', () => {
    const tree = renderer.create(<FeedContainer prop={useSelector} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
