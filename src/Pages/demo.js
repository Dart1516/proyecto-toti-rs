import logo from '../assets/images/logo.svg';
import Header from "../Components/Header-NavMenu";
import '../assets/styles/practicas.module.css';

function Demo() {
  return (
    <div className="App">
      <header >
        <Header/>
      </header>
      <body className="App-body">
      <img src={logo} className="App-logo" alt="logo" />
       <h2>Demo</h2>
        <p>
       

        </p>
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default Demo;
