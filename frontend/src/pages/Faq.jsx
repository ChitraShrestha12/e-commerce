import React, { useEffect } from "react";
import "../components/faq/faq.css";
import FaqHero from "../components/faq/hero/FaqHero";
import FAQContainer from "../components/faq/FAQContainer";
function Faq() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FaqHero />
      <FAQContainer/>
    </>
  );
}

export default Faq;
