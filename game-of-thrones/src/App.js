import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    
    
    axios('https://anapioficeandfire.com/api/characters/583', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      const data = res.data;
      console.log("recipes ---->", res)
      
      this.setState({data: data})

    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }


  render() {
    return (
      <div>
       <h1>When was Jon Snow born?</h1>
       {this.state.data.born}
      </div>
    )
  }
}

