import React from "react";
import SubscribeEmail from "./SubscribeEmail";

interface FooterSubscribeProps {
  spaceBottomClass: string;
  spaceLeftClass: string;
  colorClass: string;
  widgetColorClass: string;
  sideMenu?: string;
}

const FooterSubscribe = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass,
}: FooterSubscribeProps) => {
  return (
    <div
      className={`footer-widget ${spaceBottomClass ? spaceBottomClass : ""} ${
        sideMenu ? "ml-ntv5" : spaceLeftClass ? spaceLeftClass : ""
      } ${widgetColorClass ? widgetColorClass : ""}`}
    >
      <div className="footer-title">
        <h3>SUBSCRIBE</h3>
      </div>
      <div className={`subscribe-style ${colorClass ? colorClass : ""}`}>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <SubscribeEmail
          mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
          spaceTopClass="mt-35"
          subscribeBtnClass="whatever"
        />
      </div>
    </div>
  );
};

export default FooterSubscribe;
