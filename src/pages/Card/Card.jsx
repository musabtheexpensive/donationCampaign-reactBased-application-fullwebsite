/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";

const Card = () => {
  const [card, setCard] = useState({});

  const { id } = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    const findDonate = cards?.find((card) => card.id === id);
    setCard(findDonate);
  }, [id, cards]);
  console.log(card);
  return (
    <div>
    <DonateCard card={card}></DonateCard>
    </div>
  );
};

export default Card;
