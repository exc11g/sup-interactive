import bottomImg from "../img/bottomImg.svg";
import React from "react";

function HistoricalReference({ header, description, image, closeButton }) {
  return (
    <>
      <div className="white-box">
        <div className="img__wrapper">
          <img className="question__img" src={image} alt="..." />
        </div>
        <h1 className="card__header">{header}</h1>
        <p className="card__description">{description}</p>
        <div className="bottom__img__wrapper">
          <img className="bottom__img" src={bottomImg} alt="..." />
        </div>
      </div>
      {closeButton}
    </>
  );
}

function DoubleHistoricalReference({
  header,
  description,
  image,
  closeButton,
}) {
  let historical = (
    <HistoricalReference
      header={header}
      description={description}
      image={image}
      closeButton={closeButton}
    />
  );
  return (
    <div className="card">
      <div className="card-front">{historical}</div>
      <div className="card-back">{historical}</div>
    </div>
  );
}

export default DoubleHistoricalReference;
