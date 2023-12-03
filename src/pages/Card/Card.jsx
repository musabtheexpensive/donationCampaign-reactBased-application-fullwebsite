/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import DonateCard from "./DonateCard";

const Card = () => {
  const cards = useLoaderData();
  const { id, image, title, description } = cards || {};
const params=useParams()
  console.log(params);

  return (
    <div className="p-7">
      <img className="w-75 mx-auto" src={image} alt="" />
      <h1 className="text-4xl font-bold">{params.title}</h1>
      <p className="text-2xl ">{description}</p>
    </div>
  );
};

export default Card;
