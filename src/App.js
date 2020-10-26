import React from 'react';
import NavBar from './components/NavBar';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';


const sampleQuote = {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection" : "Left"
};



class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        quote: data[0],
      })
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <QuoteCard quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    )
  }



}

export default App;
