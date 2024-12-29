import React, { useContext } from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import InvestmentPlans from "./pages/InvestmentPlans/InvestmentPlans";
import CashFlow from "./pages/CashFlow/CashFlow";
import Process from "./pages/Process/Process";
import Rewards from "./pages/Rewards/Rewards";
import SignIn from "./pages/SignIn/SignIn";
import AdminRegister from "./pages/SignIn/AdminRegister";
import LogIn from "./pages/LogIn/LogIn";
import AdminLogIn from "./pages/LogIn/AdminLogIn";
import CreatePost from "./pages/CreatePost/CreatePost";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserUpdate from "./pages/UserDashboard/UserUpdate";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import FloatingButtons from "./component/FloatingButtons/FloatingButtons";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/packages" element={<InvestmentPlans />} />
          <Route exact path="/cashflow" element={<CashFlow />} />
          <Route exact path="/process" element={<Process />} />
          <Route exact path="/rewards" element={<Rewards />} />
          <Route exact path="/register" element={<SignIn />} />
          <Route exact path="/admin/register" element={<AdminRegister />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/admin/login" element={<AdminLogIn />} />
          <Route exact path="/create-story" element={<CreatePost />} />

          <Route
            exact
            path="/user/profile/:userId"
            element={<UserDashboard />}
          />
          <Route
            exact
            path="/user/profile/:userId/update"
            element={<UserUpdate />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
    <FloatingButtons />
  </ThemeProvider>
);

export default App;
