import React, { Component } from 'react';
import './App.css';
import AdList from './components/adList';
import AdDetails from './components/adDetails'

const ads = [
  {
    description: "some content",
    email: "fresh@gmail.com",
    id: 3,
    phone: "064444444",
    picture: "picture",
    price: "5,-",
    title: "mp3"
  }
]


class App extends Component {
  render() {
    return (
      <div>
        <AdList ads={ads} />
        <AdDetails ad={ads[0]} />
      </div>
    )
  }
}

export default App;
