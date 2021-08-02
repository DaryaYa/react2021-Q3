import React from 'react';
import './card.less';

const Card = ({ img, pictureTag, price }) => (
  <div className="card">
    <img className="card-img" src={img} alt="img" />
    <p className="card-name">{pictureTag}</p>
    <p>
      Price:
      {price}
      $
    </p>
  </div>
);

export default Card;
