import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Inventory from './pages/Inventory';
import ItemDetails from './pages/ItemDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/set/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
