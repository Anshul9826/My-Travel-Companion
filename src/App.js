import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import FindPage from "./component/FindPage/FindPage";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header logo={logo} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/find" element={<FindPage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer logo={logo} />
      </Router>
    </>
  );
}

export default App;
