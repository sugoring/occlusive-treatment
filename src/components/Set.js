import React, { useState } from "react";
import "./Set.css";

function Set() {
  const [sliderValue, setSliderValue] = useState(0); // 순응도 슬라이더 값 상태 추가

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value); // 슬라이더 값 변경 시 상태 업데이트
  };

  return (
    <div className="set-container">
      <div className="set-items-icons">
        <i className="fas fa-bars fa-xs"></i>
      </div>
      <div className="set-items-icons">
        <i className="fas fa-bell fa-xs"></i>
      </div>
      <div className="set-items-icons">
        <i className="fas fa-cog fa-xs"></i>
      </div>
      <div className="set-items">
        순응도
        <input
          className="set-items-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={sliderValue} // 슬라이더 값 연결
          onChange={handleSliderChange} // 슬라이더 값 변경 이벤트 핸들러 추가
        />
      </div>
    </div>
  );
}

export default Set;
