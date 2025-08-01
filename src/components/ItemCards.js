// import React from 'react'
import { ITEM_LINK } from '../utils/links'

// const ItemCards = ({props}) => {

//     const { name,imageId, finalPrice, description}=props.card.info

//     // finalPrice = finalPrice / 100; // Convert from paise to rupees
//     // const actualPrice = (finalPrice || price || 0) / 100;
//     console.log(imageId)
//   return (
//     <div className='item-card'>
//         <h1>{name}</h1>
//         <img src={ITEM_LINK+imageId} alt="item-image" />
//         <h3>{finalPrice}</h3>
//         <h3>{description}</h3>
//     </div>
//   )
// }

// export default ItemCards




// import React from 'react';
// import { ITEM_LINK } from '../utils/links';
// // import './ItemCard.css';

// const ItemCard = ({ props }) => {
//   const {
//     name,
//     description,
//     imageId,
//     price,
//     finalPrice,
//     ratings,
//     itemPriceStrikeOff,
//   } = props.card.info;

//   const actualPrice = (finalPrice || price || 0) / 100;
//   const originalPrice = (price || 0) / 100;
// //   const imgURL = `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`;
//   const rating = ratings?.aggregatedRating?.rating || "N/A";
//   const ratingCount = ratings?.aggregatedRating?.ratingCount || "";

//   return (
//     <div className="item-card-container">
//       <div className="item-info">
//         <h3 className="item-name">{name}</h3>

//         <div className="item-pricing">
//           {itemPriceStrikeOff && <span className="original-price">₹{originalPrice}</span>}
//           <span className="final-price">₹{actualPrice}</span>
//         </div>

//         <div className="item-rating">
//           <span className="rating-star">★</span>
//           <span className="rating-score">{rating}</span>
//           <span className="rating-count">({ratingCount})</span>
//         </div>

//         <p className="item-description">{description}</p>
//       </div>

//       <div className="item-image-section">
//         <img src={ITEM_LINK+imageId} alt={name} className="item-image" />
//         <button className="add-button">ADD</button>
//         <span className="customisable-label">Customisable</span>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;




import React from 'react';
// import './ItemCard.css';

const ItemCard = ({ props }) => {
  const { name, imageId, price, finalPrice, description, ratings } = props.card.info;

  const actualPrice = (finalPrice || price || 0) / 100;
  const originalPrice = price ? price / 100 : null;
//   const imgURL = `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`;
  const rating = ratings?.aggregatedRating?.rating || "N/A";
  const ratingCount = ratings?.aggregatedRating?.ratingCount || "";

  return (
    <div className="item-card">
      <div className="item-card-left">
        <h3 className="item-name">{name}</h3>

        <div className="item-price">
          {originalPrice && originalPrice !== actualPrice && (
            <span className="original-price">₹{originalPrice}</span>
          )}
          <span className="final-price"> ₹{actualPrice}</span>
        </div>

        <div className="item-rating">
          <span className="star">★</span> {rating} <span className="count">({ratingCount})</span>
        </div>

        <p className="item-description">{description}</p>
      </div>

      <div className="item-card-right">
        <img src={ITEM_LINK+imageId} alt={name} className="item-image" />
        <button className="add-button">ADD</button>
        <p className="customisable">Customisable</p>
      </div>
    </div>
  );
};

export default ItemCard;

