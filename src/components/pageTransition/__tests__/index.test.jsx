import React from 'react';
import PageTransition from '../index';
import renderer from 'react-test-renderer';

describe('Snapshot', () => {
  it('renderer', () => {
    const tree = renderer.create(<PageTransition />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
