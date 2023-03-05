import './App.css';
import Loginpage from './Components/Loginpage';
import Homepage from './Components/Homepage';
import Post from './Components/post';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Edit from './Components/Edit';
import View from './Components/View';
import Lowscreen from './Components/Lowscreenpopup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Loginpage/>}></Route>
<Route path="/Home" element={<Homepage/>}></Route>
<Route path="/create" element={<Post/>}></Route>
<Route path="/Edit/:empid" element={<Edit/>}></Route>
<Route path="/view/:empid" element={<View/>}></Route>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
