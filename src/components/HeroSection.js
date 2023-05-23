import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    // hero 컨테이너를 나타내는 div 요소입니다.
    <div className='hero-container'>
      {/* 비디오 요소로 동영상을 재생합니다. */}
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      {/* 제목을 나타내는 h1 요소입니다. */}
      <h1>나의 패션 취향,  <br />확실하게 알고 싶다면?</h1>
      {/* 내용을 나타내는 p 요소입니다. */}
      <p>당신의 패션을 분석하고<br /> 취향에 맞는 브랜드와 코디를 추천합니다.</p>

      {/* 버튼들을 감싸는 div 요소입니다. */}
      <div className='hero-btns'>
        {/* GET STARTED 버튼 */}
        <Link to='/test' >
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >GET STARTED
          </Button>
        </Link>

        {/* WATCH TRAILER 버튼 */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
