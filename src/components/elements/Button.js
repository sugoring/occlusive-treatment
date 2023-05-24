import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; // 버튼 스타일 확인
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // 버튼 크기 확인

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
      {children}
    </button>
  );
};
