import React, { Component, Fragment } from "react";
import Menu from "./Menu.js";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <div className='container'>{this.props.children}</div>
      </Fragment>
    );
  }
}
export default Layout;
