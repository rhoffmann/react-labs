import React from 'react';
import UserRow from './UserRow';

const UserList = (props) => {
  const rows = props.users.map(user => {
    return <UserRow key={user.id} data={user} />;
  });

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

UserList.propTypes = {
  users: React.PropTypes.array
};

export default UserList;
