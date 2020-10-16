import React, { useState as useStateMock } from 'react';
import renderer from 'react-test-renderer';

import BacklogCard from '..';

describe('Snapshot', () => {
  it('renders', () => {
    const showEditCard = true;
    const setShowEditCard = jest.fn();

    const tree = renderer
      .create(
        <BacklogCard
          currentCard={{}}
          user={{}}
          getTags={() => {}}
          getDescription={() => {}}
          getDate={() => {}}
          getTime={() => {}}
          currentDate={{}}
          currentTime={{}}
          removeCard={() => {}}
          duplicateCard={() => {}}
          FormataStringData={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
