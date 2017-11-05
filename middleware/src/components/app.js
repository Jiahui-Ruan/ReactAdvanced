import React, { Component } from 'react';
import UserList from './user_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>React simple starter</h3>
        <UserList />
      </div>
    );
  }
}
