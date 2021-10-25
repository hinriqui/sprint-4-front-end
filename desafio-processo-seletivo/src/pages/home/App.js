import logo from './logo.svg';
import { Redirect } from 'react-router';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Insira um nome de usuário</p>

        <form className="App-box">
          <input id="Input" type="text"/>
          <input id="Submit" type="submit" onClick={ function(){ document.location.href = `http://localhost:3000/users/${ document.getElementById("Input")}`} }></input>
        </form>
      </header>
    </div>
  );
}

export default Home;
