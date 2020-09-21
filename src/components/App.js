import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./users";
import Layout from "./Layout";
import Posts from "./posts";
import Tasks from "./tasks";
import SaveTask from "./tasks/save";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/posts/:key' component={Posts} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/tasks/new' component={SaveTask} />
            <Route
              exact
              path='/tasks/edit/:userId/:taskId'
              component={SaveTask}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
