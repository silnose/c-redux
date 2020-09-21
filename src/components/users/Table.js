import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Table = (props) => {
  const setRows = () =>
    props.users.map((item, index) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.website}</td>
        <td>
          <Link to={`/posts/${index}`}>
            <i className='fa fa-eye fa-lg'></i>
          </Link>
        </td>
      </tr>
    ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{setRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps)(Table);
