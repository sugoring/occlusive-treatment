import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  // click 상태와 button 상태를 useState를 통해 선언합니다.
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // 메뉴 클릭 시 click 상태를 변경하는 함수입니다.
  const handleClick = () => setClick(!click);

  // 모바일 메뉴를 닫는 함수입니다.
  const closeMobileMenu = () => setClick(false);

  // 화면 크기에 따라 버튼을 표시할지 결정하는 함수입니다.
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // 컴포넌트가 처음으로 렌더링될 때 showButton 함수를 호출합니다.
  useEffect(() => {
    showButton();
  }, []);

  // 화면 크기 변경 이벤트가 발생할 때마다 showButton 함수를 호출합니다.
  window.addEventListener('resize', showButton);

  return (
    <>
      {/* 네비게이션 바를 나타내는 nav 요소입니다. */}
      <nav className='navbar'>
        {/* 네비게이션 바 컨테이너입니다. */}
        <div className='navbar-container'>

          {/* 홈으로 이동하는 링크입니다. */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            STYLEKEY 
          </Link>

          {/* 모바일 메뉴 아이콘 */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* 메뉴 목록 */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              {/* 테스트로 이동하는 링크 */}
              <Link to='/test' className='nav-links' onClick={closeMobileMenu}>
                Test
              </Link>
            </li>

            <li className='nav-item'>
              {/* 서비스 페이지로 이동하는 링크 */}
              <Link
                to='/lookbook'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LookBook
              </Link>
            </li>

            <li className='nav-item'>
              {/* 제품 페이지로 이동하는 링크 */}
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              {/* 모바일 화면에서 회원 가입 페이지로 이동하는 링크 */}
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* button이 true인 경우에만 SIGN UP 버튼을 표시합니다. */}
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
