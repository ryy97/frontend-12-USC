import React, { Suspense } from "react";
import Layout from "../components/Layout";
import Carrousel from "../components/Carrousel";
import QuickCategory from "../components/QuickCategory";
import Spotlight from "../components/Spotlight";
import CountDownDeal from "../components/CountDownDeal";
import Subscription from "../components/Subscription";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className="preloader-wrapper">
            <div className="preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        }
      >
        <Layout
          headerContainerClass="container-fluid"
          headerPaddingClass="header-padding-2"
          headerTop="visible"
        >
          <Carrousel />

          <Spotlight spaceTopClass="pt-10" spaceBottomClass="pb-85" />

          <CountDownDeal
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            dateTime="November 17, 2022 12:00:00"
            countDownImage="/images/deal-05.jpg"
          />

          <ProductGrid
            category="furniture"
            spaceTopClass="pt-95"
            sectionTitle="Best Products"
          />

          <QuickCategory spaceTopClass="pt-95" />

          <Subscription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            subscribeBtnClass="dark-red-subscribe"
          />
        </Layout>
      </Suspense>
    </>
  );
}

export default Home;
