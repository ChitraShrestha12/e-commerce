import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/footer/Footer";
import MainHeader from "./components/layout/header/MainHeader";

function App() {
  return (
    <>
      <MainHeader/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
