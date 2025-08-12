import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {

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
        <div className = "flex gap-6">
            <Card />
            <Card />
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