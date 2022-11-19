import React from "react";
import Link from "next/link";
import { JsonData } from "../types";

interface SpotlightItemProps {
  data: JsonData;
  spaceBottomClass: string;
}

const SpotlightItem = ({ data, spaceBottomClass }: SpotlightItemProps) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <Link href={data.link}>
          <img src={data.image} alt="" />
        </Link>
        <div className="banner-content banner-content--style2">
          <h3>{data.title}</h3>
          <h4>{data.subtitle}</h4>
        </div>
      </div>
    </div>
  );
};

export default SpotlightItem;
