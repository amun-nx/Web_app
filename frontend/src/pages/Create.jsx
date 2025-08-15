import React from 'react';
import { useState } from 'react';
import TravelCard from '../components/Planer/TravelCard'; // Assuming you have a TravelCard component


const Create = () => {
    const [cards, setCards] = useState([1]); // Initialize with one day
    const handleAddDay = () => {
        setCards([...cards, cards.length + 1]); // Add a new day
    }
    const handleDeletCard = (id) => {
        setCards(cards.filter(cardId => cardId !== id)); // Remove the day
    }

    return (
        <>
        <div className = " relative">
            <div className="flex flex-col absolute z-10 border rounded-lg h-180 w-80 px-4 b-4 m-4 bg-white">
                <div className  = "py-2">
                    <h1>Voyage</h1>
                </div>
                <div className = "flex flex-row justify-between gap-2">
                    <div>
                        D : <input type="date" className="border rounded px-2 py-1 text-sm w-40" />
                    </div>
                    <div>
                        P :
                            <select className="border rounded px-2 py-1">
                                {[...Array(10)].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                    </div>
                </div>

                <div className = "flex-1 flex flex-col overflow-y-auto border rounded-lg p-2">
                    {cards.map((id) => (
                        <TravelCard key={id} id= {id} onDelete={handleDeletCard} />
                    ))}
                    <div className="flex items-center justify-center border rounded-lg p-2 m-2 bg-blue-500 text-white cursor-pointer">
                        <button onClick = {handleAddDay}>
                            Add a day
                        </button>
                    </div>

                
                </div>
                <div className = "flex flex-row justify-evenly">
                    <button className = "bg-green-500 text-white rounded-lg p-2 m-2">Save</button>
                    <button className = "bg-blue-500 text-white rounded-lg p-2 m-2">Share</button>
                </div>

            </div>

            <div className="absolute z-10 left-85 ">
                <input type="text" placeholder="Search..." className="border rounded-lg p-2 m-4 w-128 bg-white" />
            </div>
            
            <div className = "absolute z-0 w-full h-screen">
                <img src="/maps.png"/>
            </div>

        </div>

        </>

    );
}

export default Create;