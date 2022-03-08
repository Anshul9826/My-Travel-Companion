import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./component/Home/Home";

function App() {
  return (
    <>
    <Router>
      <Header logo={logo} />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </Router>
    </>
  );
}

export default App;
