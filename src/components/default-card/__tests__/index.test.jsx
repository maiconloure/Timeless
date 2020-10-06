import React from 'react';
import renderer from 'react-test-renderer';

import DefaultCard from '../index';

jest.mock('../../../utils/importAll', () => ({ icons: {} }));
//jest.mock('../index', () => )

describe('Snapshot', () => {
  it('renderer', () => {
    const tree = renderer.create(<DefaultCard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
