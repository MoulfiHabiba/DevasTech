import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar';
import PlaceDetails from './Components/PlaceDetails';
import Footer from './Components/footer';
import PlaceD from './Components/PlaceD';
import Signing from './Components/sign';

function App() {
  return (
    <div>
    <Navbar />
    <PlaceDetails/>
    <Footer/>
  </div>
  );
}

export default App;
