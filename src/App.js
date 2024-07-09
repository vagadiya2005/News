import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Midsection from './component/Midsection';
import Service from './component/Service';
import About from './component/About';
import Footer from './component/Footer'
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
<Router>



    <Navbar></Navbar>
  
    <Routes>
    
    
    <Route exact path='/' element={<Midsection></Midsection>}/>
    <Route exact path='about' element={<About></About>}/>
    
    
    </Routes>
<Footer>
  
</Footer>
    
    </Router>


    













    
    </div>
  );
}

export default App;
