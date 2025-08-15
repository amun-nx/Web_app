import Card from "../components/Card";
import { useState } from "react";


const Projets = () => {

  const [cards, setCards] = useState([1]); // Initialize with one card

  const handleDeleteCard = (id) => {
      setCards(cards.filter(cardId => cardId !== id)); // Remove the card
  };

  return (
    <>
        <div className="flex flex-col justify-center items-center">
            <h1 className = "p-8">Mes projets</h1>
        </div>
        <div className = "flex flex-row gap-6">
            {cards.map((id) => (
                <Card key={id} id={id} handleDeleteCard={handleDeleteCard} />
            ))}
            <button onClick={() => setCards([...cards, cards.length + 1])} className="p-4 bg-blue-500 text-white rounded">
                Ajouter un projet
            </button>
        </div>
    </>
  );
}

export default Projets;