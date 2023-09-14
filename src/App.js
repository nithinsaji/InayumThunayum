import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/admin/Dashboard';
import GetNumber from './components/admin/GetNumber';
import Home from './components/admin/Home';
import NewRegistration from './components/admin/NewRegistration';
import LoginForm from './components/login/LoginForm';
import SignUpForm from './components/login/SignUpForm';
import Favorite from './components/user/Favorite';
import Search from './components/user/Search';
import Shortlist from './components/user/Shortlist';
import UserDashboard from './components/user/UserDashboard';
import UserHome from './components/user/UserHome';
import Common from './pages/Common';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Common />} exact>
          <Route path="" element={<LandingPage />} exact />
          <Route path="signin" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>

        {/* Admin content */}
        <Route path="/AdminDashboard/" element={<Dashboard />} >
          <Route path="" element={<Home />} exact />
          <Route path="newregistration" element={<NewRegistration />} exact />
          <Route path="getnumber" element={<GetNumber />} exact />
        </Route>

         {/* User content */}
         <Route path="/Dashboard/" element={<UserDashboard />} >
          <Route path="" element={<UserHome />} exact />
          <Route path="search" element={<Search />} exact />
          <Route path="shortlist" element={<Shortlist />} exact />
          <Route path="favorite" element={<Favorite />} exact />
        </Route>

      <Route path="*" element={<LandingPage />} />
      </Routes>
    </>

  );
}

export default App;
