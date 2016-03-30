import React from 'react';

const UserRow = (props) => {
  const user = props.data;
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

UserRow.propTypes = {
  data: React.PropTypes.object
};

export default UserRow;
