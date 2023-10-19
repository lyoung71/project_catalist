import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import "./App.css";
import "./fonts.css";
import SignupForm from './components/SignUpForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPage";
import JournalList from "./components/JournalList";
import CalendarComp from "./components/CalendarComp";


function App() {
  return (
    <AuthProvider baseUrl="http://localhost:8000">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginForm />}/>
          <Route path="signup" element={<SignupForm />}/>
          <Route path="journals" element={<JournalList />} />
          <Route path="calendar" element={<CalendarComp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
