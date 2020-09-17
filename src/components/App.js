import React, { Fragment, Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      this.setState({ users: data });
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    this.getUsers();
  }
  render() {
    if (this.state.users.length === 0) {
      return <div>404 Users Not Found</div>;
    }
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Web</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <a href=''>{item.website}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default App;
