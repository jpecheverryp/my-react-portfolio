import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects"

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
        <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
  );
}

export default App;
