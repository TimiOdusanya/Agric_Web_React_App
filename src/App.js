import './App.scss';
import "./index.css";
import {Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/Layout';
import Home from './components/Home';
import Buy from './components/Buy';
import Sell from "./components/Sell"
import Location from "./components/Location"
import Invest from "./components/Invest"
import Content from './components/Content';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ddead1"
        
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="sell" element={<Sell />} />
          <Route path="invest" element={<Invest />} />
          <Route path="location" element={<Location />} />
          <Route path="content" element={<Content />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
