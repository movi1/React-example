// import logo from './logo.svg';
// import MyImage from './image/cat.jpg';
import './App.css';
// import Button from './components/Button.js';
import Card from './components/Card';
// import Dog1 from './image/dog.jpg';
// import Dog2 from './image/dog2.jpg';

// function ExampleComponent({ name, age, }) {
//   return <div>
//     <img src={MyImage} className="Cat-Img" alt="logo" />
//     <h2>Hi, this is a Cat! </h2>
//     <p>My name is {name} </p>
//     <p>I am  {age}</p>
//     <Button text={"Submit to cat"}></Button>
//   </div>
// }

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="Flex">
          {/* <ExampleComponent name="Bob and" age="2 years old">
          </ExampleComponent> */}
          <div className="Flex">
            <Card name="Bubble" colour="#FF6208" age="4" image={"Cat1"} buttonText={"Cat Button"} />
            <Card name="Bobby" colour="#FFC300" text={true} image={"Dog1"} buttonText={"Doggy Button"}/>
            <div className="Flex">
              <Card name="Lap" colour="#FF6208" age="4" image={"Dog2"} buttonText={"Doggy Button"} />
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
