import React from 'react';

class TestCard extends React.Component {
    render() {
      return (
          <h1>Hello this is the test card</h1>
        // <div className="Business">
        //   <div className="image-container">
        //     <img src={business.imageSrc} alt=''/>
        //   </div>
        //   <h2>{business.name}</h2>
        //   <div className="Business-information">
        //     <div className="Business-address">
        //       <p>{business.address}</p>
        //       <p>{business.city}</p>
        //       <p>{`${business.state} ${business.zipCode}`}</p>
        //     </div>
        //     <div className="Business-reviews">
        //       <h3>{business.category.toUpperCase()}</h3>
        //       <h3 className="rating">{`${business.rating} stars`}</h3>
        //       <p>{`${business.reviewCount} reviews`}</p>
        //     </div>
        //   </div>
        // </div>
      );
    }
  }
  
  export default TestCard;