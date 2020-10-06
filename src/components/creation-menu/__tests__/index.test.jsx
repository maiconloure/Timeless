import React from 'react';
import CreationMenu from '../index';
import renderer from 'react-test-renderer';

jest.mock('../../../utils/importAll', () => ({ icons: {} }));

describe('Snapshot', () => {
  it('renderer', () => {
    const tree = renderer.create(<CreationMenu />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
