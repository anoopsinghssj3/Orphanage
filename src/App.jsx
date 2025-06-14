
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpandForm from './components/ExpandForm';
import TransReport from './pages/TransReport';
import Home from './components/Home';
import DonationPage from './components/DonationPage';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import DonateInfo from './pages/DonateInfo';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/donateInfo" element={<DonateInfo />} />
        <Route path="/expense" element={<ExpandForm />} />
        <Route path="/reports" element={<TransReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
