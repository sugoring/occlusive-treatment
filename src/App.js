import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Test from './components/pages/Test';
import LookBook from './components/pages/LookBook';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router> {/* React Router의 Router 컴포넌트를 사용하여 라우팅을 설정합니다. */}
        <Navbar /> {/* 네비게이션 바 컴포넌트를 렌더링합니다. */}
        <Routes> {/* Routes 컴포넌트는 경로별로 어떤 컴포넌트를 렌더링할지 정의합니다. */}
          <Route path='/' element={<Home />} /> {/* 경로가 '/'인 경우 Home 컴포넌트를 렌더링합니다. */}
          <Route path='/test' element={<Test />} /> {/* 경로가 '/test'인 경우 TEST 컴포넌트를 렌더링합니다. */}
          <Route path='/lookbook' element={<LookBook />} /> {/* 경로가 '/lookbook'인 경우 LookBook 컴포넌트를 렌더링합니다. */}
          <Route path='/products' element={<Products />} /> {/* 경로가 '/products'인 경우 Products 컴포넌트를 렌더링합니다. */}
          <Route path='/sign-up' element={<SignUp />} /> {/* 경로가 '/sign-up'인 경우 SignUp 컴포넌트를 렌더링합니다. */}
        </Routes>
        <Footer /> {/* 푸터 컴포넌트를 렌더링합니다. */}
      </Router>
    </>
  );
}

export default App;
