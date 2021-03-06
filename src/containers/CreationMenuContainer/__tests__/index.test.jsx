import React from 'react';
import CreationMenuContainer from '../index';
import renderer from 'react-test-renderer';
import enzyme, { mount } from 'enzyme';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(() => ({ data: { notifications: [] } })),
  useDispatch: jest.fn(() => jest.fn()),
}));

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <CreationMenuContainer
          setSelectedCard={jest.fn()}
          selectedCard={{
            blockedCard: false,
            fastCard: false,
            removeCard: false,
            addText: false,
            connect: false,
            followedCard: false,
            group: false,
          }}
          className={'test'}
          history={[]}
        />
      )
      .toJSON();
  });
});

describe('Behavior', () => {
  it('opens a new card', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockImplementation(() => dispatchMock);

    const wrapper = mount(
      <CreationMenuContainer
        setSelectedCard={jest.fn()}
        selectedCard={{
          blockedCard: false,
          fastCard: false,
          removeCard: false,
          addText: false,
          connect: false,
          followedCard: false,
          group: false,
        }}
        className={'test'}
        history={[]}
        toggleMenu={() => {}}
      />
    );

    wrapper.find('img').at(0).simulate('click');
    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });
});
