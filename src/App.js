
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Day_1 from './component/days/Day_1';
import Day_2 from './component/days/Day_2';
import Day_3 from './component/days/Day_3';
import Day_4 from './component/days/Day_4';
import Day_5 from './component/days/Day_5';
// import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/day_1"  element={<Day_1/>}/>
          <Route path="/day_2"  element={<Day_2/>}/>
          <Route path="/day_3"  element={<Day_3/>}/>
          <Route path="/day_4"  element={<Day_4/>}/>
          <Route path="/day_5"  element={<Day_5/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
