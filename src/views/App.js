import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import Timer from '../components/Timer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <MyComponent />
        <Timer />
      </header>
    </div>
  );
}


export default App;
