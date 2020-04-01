import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      Margaeryplace: '',
      TargaryenRegion:'',
      LannisterCoat:'',
      BaratheonSecondSeat:'',
      BaratheonSecondAlias:'',
      HouseStarkFounder:'',
      CatelynStarkPOVBooks:''

    }
  }

  componentDidMount() {
    let one = "https://anapioficeandfire.com/api/characters/16"
    let two = "https://www.anapioficeandfire.com/api/houses/378"
    let three = "https://www.anapioficeandfire.com/api/houses/229"
    let four = "https://www.anapioficeandfire.com/api/houses/17"
    let five = "https://www.anapioficeandfire.com/api/characters/901"
    let six = "https://www.anapioficeandfire.com/api/houses/362"
    let seven = "https://www.anapioficeandfire.com/api/characters/232"
    const requestOne = axios(one, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    const requestTwo = axios(two, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    const requestThree = axios(three, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    const requestFour = axios(four, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    const requestFive = axios(five, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    const requestSix = axios(six, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    const requestSeven = axios(seven, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    axios.all([requestOne, requestTwo, requestThree,requestFour,requestFive,requestSix,requestSeven]).then(axios.spread((...responses) => {
       const responseOne = responses[0]
       const responseTwo = responses[1]
       const responesThree = responses[2]
       const responseFour = responses[3]
       const responseFive = responses[4]
       const responesSix = responses[5]
       const responesSeven = responses[6]
        this.setState({Margaeryplace:responseOne.data.born})
        
      // use/access the results 

    })).catch(errors => {
      // react on errors.
    })

  }
  render() {
    return (
      <div>
       <h1>When was Jon Snow born?</h1>
       {this.state.Margaeryplace}
       <h1>Where was Margaery Tyrell born?</h1>

       <h1>What region is House Targaryen in?</h1>

       <h1>What's the coat of arms of House Lannister?</h1>

       <h1>What is the second seat of House Baratheon?</h1>

       <h1>What is Robert Baratheon's second alias?</h1>

       <h1>What's the name of the founder of House Stark? (You have to chain fetch requests!)</h1>

        <h1>What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)</h1>

      </div>
    )
  }
}

