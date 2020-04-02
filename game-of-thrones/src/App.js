import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      johnSnowBorn:'',
      Margaeryplace: '',
      TargaryenRegion:'',
      LannisterCoat:'',
      BaratheonSecondSeat:'',
      BaratheonSecondAlias:'',
      HouseStarkFounderUrl:'',
      HouseStarkFounder:'',
      CatelynStarkPOVBooksUrls:'',
      CatelynStarkPOVBooks:[]

    }
  }

  componentDidMount() {
    let zero="https://anapioficeandfire.com/api/characters/583"
    let one = "https://anapioficeandfire.com/api/characters/16"
    let two = "https://www.anapioficeandfire.com/api/houses/378"
    let three = "https://www.anapioficeandfire.com/api/houses/229"
    let four = "https://www.anapioficeandfire.com/api/houses/17"
    let five = "https://www.anapioficeandfire.com/api/characters/901"
    let six = "https://www.anapioficeandfire.com/api/houses/362"
    let seven = "https://www.anapioficeandfire.com/api/characters/232"
    
    // axios.proxy={
      
    //     host: '127.0.0.1',
    //     port: 3000
      
    // }
     axios.headers={
 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
     }
    const requestZero = axios(zero, {
      method: 'GET'
    })
   
    const requestOne = axios(one, {
      method: 'GET'
    })
    const requestTwo = axios(two, {
      method: 'GET'
      
    })
    const requestThree = axios(three, {
      method: 'GET'
    })
    const requestFour = axios(four, {
      method: 'GET'
      
    })
    const requestFive = axios(five, {
      method: 'GET'
    })
    const requestSix = axios(six, {
      method: 'GET'
    })
    const requestSeven = axios(seven, {
      method: 'GET'
    })
    // console.log("request is");
    // console.log(axios.request);
    axios.all([requestZero,requestOne, requestTwo, requestThree,requestFour,requestFive,requestSix,requestSeven]).then(axios.spread((...responses) => {
      const responseZero = responses[1]
      const responseOne = responses[1]
       const responseTwo = responses[2]
       const responesThree = responses[3]
       const responseFour = responses[4]
       const responseFive = responses[5]
       const responesSix = responses[6]
       const responesSeven = responses[7]
       this.setState({johnSnowBorn:responseZero.data.born})
        this.setState({Margaeryplace:responseOne.data.born})
        this.setState({TargaryenRegion:responseTwo.data.region})
        this.setState({LannisterCoat:responesThree.data.coatOfArms})
        this.setState({BaratheonSecondSeat:responseFour.data.seats[1]})
        this.setState({BaratheonSecondAlias:responseFive.data.aliases[1]})
        this.setState({HouseStarkFounderUrl:responesSix.data.founder})
        let url=this.state.HouseStarkFounderUrl;
        const requestEight = axios(url, {
          method: 'GET',
          // mode: 'no-cors',
          //  headers: {
          //    'Access-Control-Allow-Origin': 'http://localhost:3000',
          //    'Content-Type': 'application/json',
          //  }
          // proxy: {
          //   host: '127.0.0.1',
          //   port: 9000
          // }
        }).then(res => {          
          this.setState({HouseStarkFounder: res.data.name})
          // console.log("response is");
          // console.log(res)
    
        })
        .catch(error => {
          console.log('there is an eror', error)
        })
        this.setState({CatelynStarkPOVBooksUrls:responesSeven.data.povBooks})
        let urls=this.state.CatelynStarkPOVBooksUrls;
        console.log("urls");
        console.log(urls);
        let getRequest=url=>{
          console.log("inside getRequest");
          console.log(url)
          return axios(url, {
            method: 'GET'});
        }
        let Promises =urls.map(url=>getRequest(url));
          const getBooks = list=>{
            this.setState({CatelynStarkPOVBooks: list})
            // console.log(typeof this.state.CatelynStarkPOVBooks)
          }
         Promise.all(Promises).then(values=>getBooks(values)).catch(errors => {
             // react on errors.
          })
      
        // });

      // use/access the results 

    })).catch(errors => {
      // react on errors.
    })

  }
  render() {
   console.log("inside render")
  let items = this.state.CatelynStarkPOVBooks.map((item,id)=><li key={id}>{item.data.name}</li>)
   return (
      <div>
        <h1>When was Jon Snow born?</h1>
        {this.state.johnSnowBorn}
       <h1>Where was Margaery Tyrell born?</h1>
       {this.state.Margaeryplace}

       <h1>What region is House Targaryen in?</h1>
        {this.state.TargaryenRegion}
       <h1>What's the coat of arms of House Lannister?</h1>
        {this.state.BaratheonSecondSeat}
       <h1>What is the second seat of House Baratheon?</h1>
        {this.state.BaratheonSecondSeat}
       <h1>What is Robert Baratheon's second alias?</h1>
        {this.state.BaratheonSecondAlias}
       <h1>What's the name of the founder of House Stark? (You have to chain fetch requests!)</h1>
        {this.state.HouseStarkFounder}
        <h1>What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)</h1>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

