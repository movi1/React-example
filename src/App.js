// import logo from './logo.svg';
// import MyImage from './image/cat.jpg';
import './App.css';
// import Button from './components/Button.js';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Layout from './components/pages/Layout';
import FAQ from './components/Faq';
import Products from './components/products/index2';



function App() {
  return (

    <div className="App">
      {/* <header className="App-header"> */}
        {/* <div className="Flex">
          <div className="Flex">
            <Card name="Bubble" colour="#18551D" text={true} image={"Cat1"} buttonText={"Cat Button"} /></div>
          <div className="Flex">
            <Card name="Bobby" colour="#505518" text={false} image={"Dog1"} buttonText={"Doggy Button"} /></div>
          <div className="Flex">
            <Card name="Lap" colour="#185055" text={true} image={"Dog2"} buttonText={"Doggy Button"} /></div>
        </div> */}

      {/* </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="card" element={< Card />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
          </Route>

          <Route path="faq" element={<FAQ />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
