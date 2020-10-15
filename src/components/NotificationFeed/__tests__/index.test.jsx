import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import FeedCard from '../index';

describe('Snapshot', () => {
  it('renders component', () => {
    const tree = renderer
      .create(<FeedCard prop={['Está muito parado por aqui... crie novos cartões!']} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Behavior', () => {
  it('minimizes the card', () => {
    const wrapper = enzyme.mount(
      <FeedCard prop={['Está muito parado por aqui... crie novos cartões!']} />
    );
    const setStateSpy = jest.fn();

    wrapper.find('div').at(3).simulate('click');
  });
});
