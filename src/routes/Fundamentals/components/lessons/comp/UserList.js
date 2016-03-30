import React from 'react';
import UserRow from './UserRow';

const UserList = (props) => {
  const rows = props.users.map(user => {
    return <UserRow key={user.id} data={user} />;
  });

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

UserList.propTypes = {
  users: React.PropTypes.array
};

export default UserList;
