import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import IconGroup from "./IconGroup";

interface HeaderProps {
  borderStyle: string;
  headerPaddingClass: string;
  headerPositionClass: string;
  headerBgClass: string;
  layout: string;
  top: string;
}

const Header = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass,
}: HeaderProps) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${
        headerPositionClass ? headerPositionClass : ""
      }`}
    >
      <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              <Logo imageUrl="/images/logo2.jpg" logoClass="logo" />
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              <Navbar />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              <IconGroup />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
