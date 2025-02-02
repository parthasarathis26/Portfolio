import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Certifications} from './components/Certifications';
import {Contact} from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Contact/>
    </div>
  );
}

export default App;
