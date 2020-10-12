import TopBarMenu from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Snapshot', () => {
  it('renders unclicked', () => {
    const tree = renderer
      .create(
        <TopBarMenu
          values={{
            user: {
              name: 'Test',
              about: 'Testing test.',
              email: 'test@test.com',
              id: '0',
              image: 'test',
            },
            currentBoard: {
              data: 'test',
              description: 'Testing test.',
              id: '0',
              title: 'The Test',
              userId: '0',
              users: [{ name: 'Test', id: '0' }],
            },
            toggleMenu: false,
          }}
          handlers={{
            handleLogout: jest.fn(),
            handleOpenEditBoard: jest.fn(),
            handleOpenEditProfile: jest.fn(),
            handleToggleMenu: jest.fn(),
            handlerSaveBoard: jest.fn(),
            handlerToggleBoard: jest.fn(),
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
