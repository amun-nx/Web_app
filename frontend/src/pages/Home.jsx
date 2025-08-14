import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const [cards, setCards] = useState([1]); // Initialize with one card

    const handleDeleteCard = (id) => {
        setCards(cards.filter(cardId => cardId !== id)); // Remove the card
    };

    const navigate = useNavigate();

    const handleClick = () => {
        // Logique pour gérer le clic sur le bouton "Créer"
        navigate("/create");
    };

  return (
    <div>

        <div className="flex flex-col justify-center items-center">
            <h1 className = " p-8">Bienvenue sur la page d'accueil</h1>
            <p>Ceci est le contenu de la page d'accueil.</p>
        </div>

        <div className = "justify-center items-center flex flex-col">
            <div className="inline-flex justify-center items-center gap-4 p-4 border m-4 rounded">
                <input type="text" placeholder="Où aller ?" className="px-4 py-2 border rounded" />
                <input type="date" placeholder="Départ" className="px-4 py-2 border rounded" />
                <input type="date" placeholder="Arrivée" className="px-4 py-2 border rounded" />
                <input type="number" placeholder="Personne ?" className="px-4 py-2 border rounded" />
                <button onClick={handleClick} className="px-4 py-2 text-white rounded">Créer</button>
                <button className="px-4 py-2 border rounded">Option avancée</button>
            </div>
        </div>

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
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="p-8">Tendances</h1>
            </div>
        </div>
    </div>
  );
}

export default Home;