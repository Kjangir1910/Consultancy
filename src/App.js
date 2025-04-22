import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Blogs from './Blogs';
import ContactUs from './ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <> 
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </Router>
     </>
  );
}

export default App;
