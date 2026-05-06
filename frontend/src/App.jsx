import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/footer/Footer";
import MainHeader from "./components/layout/header/MainHeader";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetailSection from "./components/careers/job-detail/JobDetailSection";
import Faq from "./pages/Faq";
import { useEffect } from "react";
import { scrollToTopSmooth } from "./utils/utils";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTopSmooth();
  }, [pathname]);
  return (
    <>
      <MainHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers">
          <Route index element={<Careers />} />
          <Route path=":queryTitle" element={<JobDetailSection />} />
        </Route>
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
