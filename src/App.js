import './App.css';
import axios from 'axios';
import FilterBox from './Components/FilterBox/FilterBox';
import Footer from './Components/Footer/Footer';
import InfoCards from './Components/InfoCards/InfoCards';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Topbar/>
      {console.log()}
      {/* Filter  */}
      <FilterBox/>
      {/* Cards */}
      <InfoCards/>
      {/* Footer   */}
      <Footer/>
    </div>
  );
}

export default App;
