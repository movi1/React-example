// import logo from './logo.svg';
import MyImage from './image/cat.jpg';
import './App.css';
import Dog from './components/dog.js';

function ExampleComponent() {
  return <>
    <img src={MyImage} className="Cat-Img" alt="logo" />
    <h2>Hi, this is my Cat!</h2>
  </>
}
// finish
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ExampleComponent></ExampleComponent>
        <Dog></Dog>
        
      </header>
    </div>
  );
}

export default App;
