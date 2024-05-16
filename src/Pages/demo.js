import logo from '../assets/images/logo.svg';
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';

function Demo() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         DEMO
        </p>
        <p>
         DEMO
        </p>
        <p>
         DEMO
        </p>
        <p>
         DEMO
        </p>
        <p>
         DEMO
        </p>
        <p>
         DEMO
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Demo;
