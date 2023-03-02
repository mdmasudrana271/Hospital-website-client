import React from "react";

const BannerCard = ({ card }) => {
  return (
    <div className=" w-28 h-32 bg-base-100 shadow hover:shadow-xl rounded">
      <figure className="px-10 pt-10 rounded-full">
        <img
          src={card.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className=" items-center text-center">
        <h2 className="text-xs">{card?.name}</h2>
      </div>
    </div>
  );
};

export default BannerCard;
