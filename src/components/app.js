import React, { Component } from 'react';
import DiaryList from '../containers/diary-list';

export default class App extends Component {
  render() {
    return (
      <div>
				<DiaryList />
			</div>
    );
  }
}
