import React from "react";
import spotlightData from "../public/data/spotlight-data.json";
import SpotlightItem from "./SpotlightItem";

interface SpotlightProps {
  spaceBottomClass: string;
  spaceTopClass: string;
}

const Spotlight = ({ spaceTopClass, spaceBottomClass }: SpotlightProps) => {
  return (
    <div
      className={`banner-area banner-area-2 ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="custom-row-2">
          {spotlightData &&
            spotlightData.map((item, index) => {
              return (
                <SpotlightItem
                  spaceBottomClass="mb-10"
                  data={item}
                  key={item.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
