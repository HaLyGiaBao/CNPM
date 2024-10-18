import './assets/App.css';

function ButtonGroup() {
    return(
        <div className="Button-group">
            <button>EAT IN</button>
            <button>TAKE AWAY</button>
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <ButtonGroup />
      </header>
    </div>
  );
}

export default App;
