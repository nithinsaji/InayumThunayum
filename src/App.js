import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/landingPage/Footer';
import NavBar from './components/landingPage/NavBar';
import LoginForm from './components/login/LoginForm';
import SignUpForm from './components/login/SignUpForm';
import LandingPage from './pages/LandingPage';

function App() {
  return (
  <>
      <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} exact/>
      <Route path="/signin" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
      <Footer />
      </>

  );
}

export default App;
