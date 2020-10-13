import EditUserModal from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Snapshot', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <EditUserModal
          showEditUser={true}
          setShowEditUser={jest.fn()}
          userName={'Test'}
          userAbout={'Testing test.'}
          userImage={'test'}
          submitNotification={jest.fn()}
          handleUserName={jest.fn()}
          handleUserAbout={jest.fn()}
          handleUserImage={jest.fn()}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
