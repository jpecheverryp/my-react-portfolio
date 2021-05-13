import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
function App() {
  return (
      <Router>
        <div>
        <Navbar/>
        <Route exact path="/" component={Hero} />
        </div>
      </Router>
  );
}

export default App;
