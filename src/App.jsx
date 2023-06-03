import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
