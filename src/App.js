import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About"
function App() {
  return (
      <Router>
        <div>
        <Navbar/>
        <Route exact path="/" component={About} />
        </div>
      </Router>
  );
}

export default App;
