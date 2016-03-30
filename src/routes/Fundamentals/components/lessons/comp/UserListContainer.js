import React from 'react';
import { compose } from 'react-komposer';
import UserList from './UserList';
import userData from './userData';

const onPropsChange = (props, onData) => {
  onData(null, {
    users: userData.slice(0, props.limit || -1)
  });
};

const UserListContainer = compose(onPropsChange)(UserList);

export default UserListContainer;
