import React, { Component } from "react";
import BillboardChart from "react-billboard.js";
import "react-billboardjs/lib/billboard.css";
const CHART_DATA = {
  columns: [
    ["data1", 30, 20, 50, 40, 60, 50],
    ["data2", 200, 130, 90, 240, 130, 220],
    ["data3", 300, 200, 160, 400, 250, 250]
  ],
  type: "line"
};

class TestComponents extends Component {
  render() {
    return (
      <div className="TestComponents">
        <BillboardChart data={CHART_DATA} />;
      </div>
    );
  }
}
export default TestComponents;
