import React from 'react';
import ModalBackground from '../index';
import renderer from 'react-test-renderer';

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer.create(<ModalBackground show={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('not renders', () => {
    const tree = renderer.create(<ModalBackground show={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
