import logo from './logo.svg';
import './App.css';

function App() {
  function handleNameChamge(){
    const names = ["John", "Dave", "Jane", "Kevin"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  }
  //you can create variables that dont get rturned
  const name = "John Doe";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello {handleNameChamge()}!
        </p>
       
        {/* you can  make stuff to strings immediatly by encolising them in an {} */}
        {/* Java script expresions use {}*/}
      </header>
     
    </div>
  );
}

export default App;
