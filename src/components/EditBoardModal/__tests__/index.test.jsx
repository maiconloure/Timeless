import EditBoardModal from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <EditBoardModal
          boards={['test']}
          values={{ boardTitle: 'title', boardDescription: 'description' }}
          showModal={{ showEditModal: true, showBoardModal: true, setShowBoardModal: jest.fn() }}
          handlers={{
            handlerTitle: jest.fn(),
            handlerDescription: jest.fn(),
            handleReturnForm: jest.fn(),
            handlerModifyBoard: jest.fn(),
            handlerRemoveBoard: jest.fn(),
            handlerSelectBoard: jest.fn(),
            handlerCreateBoard: jest.fn(),
            handlerSubmitForm: jest.fn(),
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders but showBoardModal is false', () => {
    const tree = renderer
      .create(
        <EditBoardModal
          boards={['test']}
          values={{ boardTitle: 'title', boardDescription: 'description' }}
          showModal={{ showEditModal: true, showBoardModal: false, setShowBoardModal: jest.fn() }}
          handlers={{
            handlerTitle: jest.fn(),
            handlerDescription: jest.fn(),
            handleReturnForm: jest.fn(),
            handlerModifyBoard: jest.fn(),
            handlerRemoveBoard: jest.fn(),
            handlerSelectBoard: jest.fn(),
            handlerCreateBoard: jest.fn(),
            handlerSubmitForm: jest.fn(),
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('not renders', () => {
    const tree = renderer
      .create(
        <EditBoardModal
          boards={['test']}
          values={{ boardTitle: 'title', boardDescription: 'description' }}
          showModal={{ showEditModal: false, showBoardModal: false, setShowBoardModal: jest.fn() }}
          handlers={{
            handlerTitle: jest.fn(),
            handlerDescription: jest.fn(),
            handleReturnForm: jest.fn(),
            handlerModifyBoard: jest.fn(),
            handlerRemoveBoard: jest.fn(),
            handlerSelectBoard: jest.fn(),
            handlerCreateBoard: jest.fn(),
            handlerSubmitForm: jest.fn(),
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
