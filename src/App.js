import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Mynavbar';
import Home from './components/Home';
import Pitchers from './components/Pitchers';
import Hitters from './components/Hitters';
import Signin from './components/Signin';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Addpitcher from './components/Addpitcher';

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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
