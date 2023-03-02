import React from "react";

const Card = ({card}) => {
  return (
    <section>
      <div className="card card-compact w-full bg-base-100 shadow hover:shadow-2xl rounded">
        <figure>
          <img
            src={card.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <p className="text-thirdColor">{card.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
