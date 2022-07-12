import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Mynavbar';
import Home from './components/Home';
import Pitchers from './components/Pitchers';
import Hitters from './components/Hitters';
import Signin from './components/Signin';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pitchers' element={<Pitchers />}/>
          <Route path='/hitters' element={<Hitters />}/>
          <Route path='/signin' element={<Signin />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
