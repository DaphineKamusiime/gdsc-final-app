import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/HomePage";
import Login from "./components/LoginPage/LoginPage";
import Sign_up from "./components/SignupPage/SignUpPage";
import Profile from "./components/ProfilepPage/ProfilePage";
import About from "./components/AboutPage/About";
import Images from "./components/ImagesPage/Images";
import Content from "./components/ContentPage/content";

import { UserAuthContextProvider } from "./utils/UserAuthContext";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Sign_up />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
          <Route path="/content" element={<Content />} />
        </Routes>
        <Footer />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
