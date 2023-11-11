import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/admin/Dashboard";
import GetNumber from "./components/admin/GetNumber";
import Home from "./components/admin/Home";
import NewRegistration from "./components/admin/NewRegistration";
import RequiredAuth from "./components/common/ReqiredAuth";
import LoginForm from "./components/login/LoginForm";
import SignUpForm from "./components/login/SignUpForm";
import Status from "./components/login/Status";
import Fromyou from "./components/user/Fromyou";
import Interest from "./components/user/Interest";
import InterestAccepted from "./components/user/Interest/InterestAccepted";
import InterestReceived from "./components/user/Interest/InterestReceived";
import InterestRejected from "./components/user/Interest/InterestRejected";
import RequestAccepted from "./components/user/Interest/RequestAccepted";
import RequestSend from "./components/user/Interest/RequestSend";
import Onyou from "./components/user/Onyou";
import ProfileSetting from "./components/user/ProfileSetting";
import ProfileView from "./components/user/ProfileView";
import Search from "./components/user/Search";
import Shortlist from "./components/user/Shortlist";
import UserDashboard from "./components/user/UserDashboard";
import UserHome from "./components/user/UserHome";
import Common from "./pages/Common";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Common />} exact>
          <Route path="" element={<LandingPage />} exact />
          <Route path="signin" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="status" element={<Status />} />
        </Route>

        {/* Admin content */}
        <Route element={<RequiredAuth allowedRoles={"Admin"} />}>
          <Route path="/AdminDashboard/" element={<Dashboard />}>
            <Route path="" element={<Home />} exact />
            <Route path="newregistration" element={<NewRegistration />} exact />
            <Route path="getnumber" element={<GetNumber />} exact />
          </Route>
        </Route>

        {/* User content */}
        <Route element={<RequiredAuth allowedRoles={"User"} />}>
          <Route path="/Dashboard/" element={<UserDashboard />}>
            <Route path="" element={<UserHome />} exact />
            <Route path="search" element={<Search />} exact />
            <Route path="shortlist" element={<Shortlist />} exact />
            <Route path="profileview" element={<ProfileView />} exact />
            <Route path="interest" element={<Interest />} exact>
            <Route path="fromyou" element={<Fromyou />} exact>
                <Route path="" element={<RequestSend />} exact />
                <Route path="accepted" element={<RequestAccepted />} exact />
              </Route>
              <Route path="onyou" element={<Onyou />} exact>
                <Route path="" element={<InterestReceived />} exact />
                <Route path="accepted" element={<InterestAccepted />} exact />
                <Route path="rejected" element={<InterestRejected />} exact />
              </Route>
            </Route>
            <Route path="settings" element={<ProfileSetting />} exact />
          </Route>
        </Route>

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
