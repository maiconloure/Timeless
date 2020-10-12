import React from 'react';
import renderer from 'react-test-renderer';

import FeedCard from '../index';

describe('Snapshot', () => {
  it('renders component', () => {
    const tree = renderer
      .create(<FeedCard prop={['Está muito parado por aqui... crie novos cartões!']} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
