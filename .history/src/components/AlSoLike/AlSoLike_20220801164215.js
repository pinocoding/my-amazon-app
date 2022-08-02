import React from "react";

function AlSoLike() {
  return (
    <div>
      <h4> You may also like</h4>
      <TopSmartWatches
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
      <TopSellersInBook
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        // autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
      <TopSellerDresses
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        // autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
      <TopVideosGames
        adaptiveHeight={true}
        dots={false}
        // autoplay={true}
        infinite={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
    </div>
  );
}

export default AlSoLike;
