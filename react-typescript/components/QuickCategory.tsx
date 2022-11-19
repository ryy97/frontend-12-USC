import React from "react";
import bannerData from "../public/data/banner-data.json";
import QuickCategoryItem from "./QuickCategoryItem";

interface QuickCategoryProps {
  spaceBottomClass: string;
  spaceTopClass: string;
}

const QuickCategory = ({
  spaceBottomClass,
  spaceTopClass,
}: QuickCategoryProps) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="row no-gutters">
        {bannerData &&
          bannerData.map((item, index) => {
            return (
              <QuickCategoryItem
                data={item}
                key={item.id}
                spaceBottomClass="mb-30"
              />
            );
          })}
      </div>
    </div>
  );
};

export default QuickCategory;
