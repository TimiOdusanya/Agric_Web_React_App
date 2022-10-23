import './App.scss';
import {Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/Layout';
import Home from './components/Home';
import Buy from './components/Buy';
import Sell from "./components/Sell"
import Location from "./components/Location"
import Invest from "./components/Invest"
import Content from './components/Content';


function App() {
  return (
    <div className="App">

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
