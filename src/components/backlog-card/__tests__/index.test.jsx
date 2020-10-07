import React, { useState as useStateMock } from 'react';
import BacklogCard from '../';
import renderer from 'react-test-renderer';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

describe('Snapshot', () => {
  it('renders', () => {
    const showEditCard = true;
    const setShowEditCard = jest.fn();

    const tree = renderer
      .create(<BacklogCard closeDataPass={{ showEditCard, setShowEditCard }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
