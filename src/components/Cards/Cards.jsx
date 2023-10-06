import AllCards from "./AllCards";

const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div className="py-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    cards?.map(card=><AllCards key={card.id} card={card}></AllCards>)
                }
            </div>
        </div>
    );
};

export default Cards;