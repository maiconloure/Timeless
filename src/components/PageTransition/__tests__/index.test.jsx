import React from 'react';
import renderer from 'react-test-renderer';

import PageTransition from '../index';

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer.create(<PageTransition />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
