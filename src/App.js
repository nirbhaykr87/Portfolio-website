
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Nav from './components/Nav';
import{ Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Error from './pages/Error';
import Response from './pages/Response';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './pages/Footer'


function App() {
  return (
   <>

<Nav/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route  exact path='/about' element={<About/>}/>
  <Route exact  path='/contact' element={<Contact/>}/>
  <Route  exact path='/projects'element={<Projects/>}/>
  <Route  exact path='/resume' element={<Resume/>}/>
  <Route exact path='/response' element={<Response/>}/>
  <Route path='*' element={<Error/>}/>
</Routes>


<Footer/>


   </>
  );
}

export default App;
