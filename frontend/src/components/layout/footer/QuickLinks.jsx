import { scrollToTopSmooth } from "../../../utils/utils";
import FooterHeading from "./FooterHeading";
import FooterLinkList from "./FooterLinkList";

function QuickLinks() {
  const quickLinks = [
    { label: "About Us", href: "about", onClick: scrollToTopSmooth },
    { label: "Contact Us", href: "contact", onClick: scrollToTopSmooth },
    { label: "Careers", href: "careers", onClick: scrollToTopSmooth },
    { label: "FAQ", href: "faq", onClick: scrollToTopSmooth },
  ];
  return (
    <div className="footer-col">
      <FooterHeading heading={"Quick Links"} />
      <FooterLinkList footerLinks={quickLinks} />
    </div>
  );
}

export default QuickLinks;
