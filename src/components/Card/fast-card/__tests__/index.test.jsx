import React from 'react';

import renderer from 'react-test-renderer';
import FastCard from '../index';

const fastCard = {};

describe('Snapshot', () => {
  it('renderer', () => {
    const tree = renderer.create(<FastCard fastCard={{ fastCard }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
