import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from './pages/Contact';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
        <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
  );
}

export default App;
