import './App.css';
import React from 'react';

function DataFormatada(props) {
  return <h2>Horário atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date : new Date()
    }
  }

  componentDidMount(){
    setInterval( () => {
      this.thick()
    }, 1000 )
  }

  componentWillUnmount(){

  }

  thick(){
    this.setState({
      date : new Date()
    })
      
  }

  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
      </header>
    </div>
  );
}

export default App;
