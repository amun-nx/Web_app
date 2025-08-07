import { useState } from 'react';
import HourColumn from './HourColumn';

const TravelCard = () => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className = "border flex flex-col flex-1">
        <button onClick={() => setIsOpen(!isOpen)} className="mb-2">
            Day 1
        </button>
        {isOpen && 
        <div className = "flex flex-row h-full overflow-y-auto">
            <div>
                <HourColumn />
            </div>
            <div className = "border m-2">
            </div>
            <div className = "flex flex-col gap-2 p-2">
                <div className = "border border-black rounded-lg">
                    <img></img>
                    <h2>Nom activité</h2>
                    <p className = "text-xs">Description de l'activité</p>
                    <p className = "text-xs">Détails</p>
                    <input type="number" placeholder = "cost"className = "text-xs"></input>
                    <input type="number" placeholder = "duration" className = "text-xs"></input>
                </div>

                <div className = "border border-black rounded-lg">
                    <img></img>
                    <h2>Nom activité</h2>
                    <p className = "text-xs">Description de l'activité</p>
                    <p className = "text-xs">Détails</p>
                    <input type="number" placeholder = "cost"className = "text-xs"></input>
                    <input type="number" placeholder = "duration" className = "text-xs"></input>
                </div>
            </div>
        </div>
        }
    </div>
  );
}

export default TravelCard;