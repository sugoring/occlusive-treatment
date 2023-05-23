import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    // cards 컨테이너를 나타내는 div 요소입니다.
    <div className='cards'>
      {/* 제목 */}
      <h1>Fashion KEY Point</h1>
      {/* cards__container */}
      <div className='cards__container'>
        {/* cards__wrapper */}
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            {/* 첫 번째 카드 아이템 */}
            <CardItem
              src='/images/points/points-1.png'
              text='변화하는 트렌드를 반영하여 평범하지 않고 개성있는 디테일을 추구하는 스타일'
              label='유니크 Point'
              path='/lookbook'
            />
            {/* 두 번째 카드 아이템 */}
            <CardItem
              src='images/points/points-2.png'
              text='격식을 갖추지 않고 길거리에서 편하게 입을 수 있는 힙한 스타일'
              label='스트릿 Point'
              path='/lookbook'
            />
          </ul>
          <ul className='cards__items'>
            {/* 세 번째 카드 아이템 */}
            <CardItem
              src='images/points/points-3.png'
              text='장식적인 것 없이 깔끔하고 심플하며 직선적인 실루엣을 추구하는 스타일'
              label='모던 Point'
              path='/lookbook'
            />
            {/* 네 번째 카드 아이템 */}
            <CardItem
              src='images/points/points-4.png'
              text='일상적이고 평범한 착장이 무난하지 않도록 센스있는 포인트가 들어간 스타일'
              label='노멀 Point'
              path='/lookbook'
            />
            {/* 다섯 번째 카드 아이템 */}
            <CardItem
              src='images/points/points-5.png'
              text='사랑스러운 소녀같이 귀엽고 로맨틱하면서 여성스러운 무드를 강조한 스타일'
              label='러블리 Point'
              path='/lookbook'
            />
          </ul>
          <ul className='cards__items'>
            {/* 여섯 번째 카드 아이템 */}
            <CardItem
              src='images/points/points-6.png'
              text='1990-2000년대의 감성을 재해석하여 오래된 듯한 멋진 느낌이 드는 스타일'
              label='레트로 Point'
              path='/lookbook'
            />
            {/* 일곱 번째 카드 아이템 */}
            <CardItem
              src='images/points/points-7.png'
              text='섹시함과 퇴폐미가 공존하는 화려하고 여성스러운 스타일'
              label='글램 Point'
              path='/lookbook'
            />
            {/* 여덟 번째 카드 아이템 */}
            <CardItem
              src='images/points/points-8.png'
              text='스포츠웨어와 일상복의 경계를 허물고 활동적인 이미지를 표현하는 스타일'
              label='액티브 Point'
              path='/lookbook'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
