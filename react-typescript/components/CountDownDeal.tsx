import React from "react";
import Link from "next/link";
import Countdown from "react-countdown-now";
import RendererCountdown from "./RendererCountdown";

interface CountDownDealProps {
  countDownImage: string;
  dateTime: string;
  spaceBottomClass: string;
  spaceTopClass: string;
}

const CountDownDeal = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage,
}: CountDownDealProps) => {
  return (
    <div
      className={`funfact-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <Countdown
                  date={Date.now() + 129675000}
                  renderer={RendererCountdown}
                />
              </div>
              <div className="funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover">
                <Link href="/products">SHOP NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image">
              <Link href="/products">
                <img src={countDownImage} alt="" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownDeal;
