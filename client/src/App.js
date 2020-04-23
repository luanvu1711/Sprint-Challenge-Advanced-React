import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Players from "./components/Players";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      textInput: ''
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      .then(res => res.json())
      .then(player => {
        return this.setState({ players: player })
      })
      .catch(err => {
        console.log("The error is: ", err)
      })
  }


  render() {

    return (
      <div className="App">
        <NavBar />
        <div className="players">
          {this.state.players.map(item => {
            return <Players players={item} />
          })}
        </div>
      </div>
    );
  }
}


export default App;
