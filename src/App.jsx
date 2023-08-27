import './App.css';
import Navbar from './compounds/navbar';
import Intro from './compounds/intro';
import About from './compounds/About'
import Contact from './compounds/contact';
import Skill from './compounds/skill';
import Hobby from './compounds/hobby';

function App() {
  return (
    <div className="App">
      <Navbar/>    
      <Intro/> 
      <About/>
      <Skill/>
      <Hobby/>
      <Contact/>
    </div>
  );
}

export default App;
