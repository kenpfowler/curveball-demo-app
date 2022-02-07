import "./App.css";
import Navigation from "./components/navigation/navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import CreateCampaginPage from "./pages/create-campagin";
import SignInAndSignUpPage from "./pages/signin-and-signup";
import SettingsPage from "./pages/settings";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-campagin" element={<CreateCampaginPage />} />
          <Route path="/signin-and-signup" element={<SignInAndSignUpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
