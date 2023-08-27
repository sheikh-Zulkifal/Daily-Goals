import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Shapatar, Route,Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import User from './Components/User';
function App() {
  return (
    <>
      <Shapatar>
        <div>
          <Header />
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/user/:id' element={<User />}/>

          </Routes>
          <Footer />
          
        </div>
      </Shapatar>
    </>
  );
}

export default App;
