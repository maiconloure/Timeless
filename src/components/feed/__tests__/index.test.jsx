import React from 'react';
import FeedCard from '../index';
import renderer from 'react-test-renderer';

describe('Snapshot', () => {
  it('renders component', () => {
    const tree = renderer
      .create(<FeedCard prop={['Está muito parado por aqui... crie novos cartões!']} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
