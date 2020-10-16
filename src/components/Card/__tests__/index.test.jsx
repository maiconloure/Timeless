import React from 'react';
import renderer from 'react-test-renderer';

import DefaultCard from '../index';

jest.mock('../../../utils/importAll', () => ({ icons: {} }));

const data = {
  checked: '',
  group: {
    color: '',
    number: 0,
  },
  users: {
    name: '',
    id: 0,
  },
  connected: 0,
  followers: { name: '', id: 0 },
  blocked: '',
  fastCard: '',
  title: '',
  time: {
    finish: '',
    start: '',
    done: '',
  },
  description: '',
  tags: ['', ''],
};

const image = {
  email: '',
  name: '',
  id: 0,
  image: '',
  about: '',
};

const removeCard = {
  selectedCard: {
    removeCard: '',
    fastCard: '',
    blockedCard: '',
  },
};

describe('Snapshot', () => {
  it('renderer', () => {
    const tree = renderer
      .create(
        <DefaultCard card={{ data }} user={{ image }} selectedCard={{ removeCard }} fastCard={{}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
