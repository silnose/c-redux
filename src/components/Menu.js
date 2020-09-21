import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <nav>
        <NavLink to='/' activeClassName='is-selected'>
          Users
        </NavLink>
        <NavLink to='/tasks' activeClassName='is-selected'>
          Task
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default Menu;
