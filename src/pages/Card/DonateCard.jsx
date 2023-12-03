import { Link } from "react-router-dom";

const DonateCard = ({ card }) => {
  const { id, image, title, description } = card || {};

  console.log(title);
  console.log(card);
  return (
    <div>
      <img
        className="h-[500px] w-[1000px] mx-auto relative"
        src={image}
        alt=""
      />
      <Link to="/donation">
        <button className="btn top-full ml-36  bg-[#FF444A] absolute   focus:ring-4 focus:outline-none  dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Donate $290
        </button>
      </Link>
      <div className="my-10 px-32">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-2xl ">{description}</p>
        <p>An effective donation text message can help your organization reach its fundraising goals. Here are a few tips to help you write donation messages that convert.</p>
      </div>
    </div>
  );
};

export default DonateCard;
