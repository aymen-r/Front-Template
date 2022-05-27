import React from "react";
import ProductBlock from "../productBlock/ProductBlock";

import "./prodRange.css";
import { Box } from "@mui/system";
import { Tabs } from "@mui/material";
import LabTabs from "./LabTabs";

const ProductRange = () => {
  return (
    <div className="">
      <div className="container">
        <h1 className="head-line">A range of photovoltaic products </h1>
        <h2 className="head-line2">to make your project a reality</h2>
        <div className="category">
          <LabTabs />
          <div className="more-accessories">
            <p className="text-base">
              Our product catalogue contains also - high-quality structure &
              protection and complete fixing tools, and any kind of PV
              accessories such as cables, connectors, etc. <br /> Here you will
              find the right products for your photovoltaic system. Order and
              book products now in the easiest way with{" "}
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Thager alrafedain
              </span>
            </p>
            <button>Get more PV accessory</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
