import React, { useState, useEffect } from "react";
import { Slider, Card } from "antd";

const BraSizeSelector = ({ value, onChange }) => {
  const cups = ["A", "B", "C", "D", "E", "F", "G"];

  const [band, setBand] = useState(75);
  const [cupIndex, setCupIndex] = useState(2);

  const selectedCup = cups[cupIndex];

  useEffect(() => {
    if (onChange) {
      onChange(`${band}${selectedCup}`);
    }
  }, [band, selectedCup]);

  return (
    <div className="flex flex-col max-w-[480px] gap-6 px-4 py-3">
      {/* Band Size Slider */}
      <Card className="rounded-xl bg-[#f5f4f0]">
        <label className="text-[#181711] text-base font-normal leading-normal">
        Selected Size: {band}
        {selectedCup}
        </label>
        <div className="h-3" />
        <Slider
          min={65}
          max={95}
          step={5}
          value={band}
          onChange={(val) => setBand(val)}
          trackStyle={{ backgroundColor: "#f5d63d" }}
          handleStyle={{ borderColor: "#f5d63d" }}
        />
        <div className="h-5"/>
        <Slider
          min={0}
          max={cups.length - 1}
          step={1}
          value={cupIndex}
          onChange={(val) => setCupIndex(val)}
          marks={cups.reduce((acc, c, i) => {
            acc[i] = c;
            return acc;
          }, {})}
          trackStyle={{ backgroundColor: "#f5d63d" }}
          handleStyle={{ borderColor: "#f5d63d" }}
        />
      </Card>

    </div>
  );
};

export default BraSizeSelector;
