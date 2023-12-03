/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";
// import DonateCard from "./DonateCard";

const Card = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  // const { id, image, title, description } = cards || {};

  const singleCard = cards.find((card) => card.id == id);
  return (
    <div className="p-7">
     
      <DonateCard card={singleCard}></DonateCard>
    </div>
  );
};

export default Card;
