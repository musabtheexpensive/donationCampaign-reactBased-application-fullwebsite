/* eslint-disable no-undef */

import { Link } from "react-router-dom";

const AllCards = ({ card }) => {
  const { id, image, title, description } = card || {};
  return (
    
  <Link to={`/cards/${id}`}>
      <div  className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src={image}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
        </div>
    </div>
  </Link>
  );
};

export default AllCards;
