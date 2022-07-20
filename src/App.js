import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/pageComponents/Mynavbar';
import Home from './components/Home';
import Pitchers from './components/pitcherComponents/Pitchers';
import Hitters from './components/hitterComponents/Hitters';
import Signin from './components/loginComponents/Signin';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/pageComponents/Footer';
import Addpitcher from './components/pitcherComponents/Addpitcher.js';
import Pitcheranalysis from './components/pitcherComponents/Pitcheranalysis';

function App() {
  return (
    <>
      <Navbar />
      <div className="main pb-5">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pitchers' element={<Pitchers />}/>
          <Route path='/hitters' element={<Hitters />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/addpitcher' element={<Addpitcher />}/>
          <Route path='/pitcheranalysis' element={<Pitcheranalysis />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
