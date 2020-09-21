import React from "react";
import Spinner from "../general/Spinner";
import { connect } from "react-redux";
const Comments = (props) => {
  if (props.errorComments) {
    return <div>{props.errorComments}</div>;
  }
  debugger;
  if (props.loadingComments && !props.comments.length) {
    return <Spinner />;
  }
  return (
    <ul>
      {props.comments.map((item, index) => (
        <li key={index}>
          {item.email} <br /> {item.body}
          <hr />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ postReducer }) => postReducer;

export default connect(mapStateToProps)(Comments);
