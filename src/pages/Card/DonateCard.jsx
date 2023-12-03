const DonateCard = ({ card }) => {
  const { id, image, title, description } = card || {};

  console.log(title);
  console.log(card);
  return (
    <div>
      <img className="h-[450px] w-[900px] mx-auto" src={image} alt="" />
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-2xl ">{description}</p>
    </div>
  );
};

export default DonateCard;
