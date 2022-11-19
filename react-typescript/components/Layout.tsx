import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: any;
  headerContainerClass: string;
  headerPaddingClass: string;
  headerPositionClass: string;
  headerTop: string;
}

const Layout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
}: LayoutProps) => {
  return (
    <Fragment>
      <Header
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <Footer
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

export default Layout;
