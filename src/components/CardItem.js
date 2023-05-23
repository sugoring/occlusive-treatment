import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      {/* 카드 아이템을 나타내는 li 요소입니다. */}
      <li className='cards__item'>
        {/* 카드 아이템 링크 */}
        <Link className='cards__item__link' to={props.path}>
          {/* 이미지와 레이블을 포함하는 figure 요소입니다. */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* 이미지 */}
            <img
              className='cards__item__img'
              alt='Point Image'
              src={props.src}
            />
          </figure>
          {/* 카드 아이템 정보 */}
          <div className='cards__item__info'>
            {/* 텍스트 */}
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
