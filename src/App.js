import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';



function App() {
  return (
    <BrowserRouter >
      <div className="App">
      

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>


      </div>

    </BrowserRouter>
  );
}

export default App;
