import React from "react";
import FooterHeading from "./FooterHeading";
import FooterLinkList from "./FooterLinkList";

function CategoryLinks() {
  const categoryLinks = [
    { label: "Electronics", href: "#" },
    { label: "Gaming", href: "#" },
    { label: "Home & Living", href: "#" },
    { label: "Sports & Outdoors", href: "#" },
  ];
  return (
    <div className="footer-col">
      <FooterHeading heading={"Categories"} />
      <FooterLinkList footerLinks={categoryLinks} />
    </div>
  );
}

export default CategoryLinks;
