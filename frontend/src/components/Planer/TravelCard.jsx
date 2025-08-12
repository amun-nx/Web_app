import { useState } from 'react';
import HourColumn from './HourColumn';
import { useRef } from 'react';
import DndCard from './DndCard'; 

const TravelCard = ({id , onDelete}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [SidePanel, setSidePanel] = useState(false);
    const buttonRef = useRef(null); // Reference for the button to position the side panel


  return (
    <div className = " rounded-lg flex flex-col border border-gray-300 bg-gray-200 my-2">
        <div className = "flex flex-row  rounded-lg bg-gray-300">
            <button onClick={() => setIsOpen(!isOpen)} className="flex-1 flex p-2">
                Day {id}
            </button>
            <button onClick={() => onDelete(id)} className = "rounded-full">
                <img src="./trash.svg" alt="delete" className = "h-8"/>
            </button>
        </div>
        {isOpen && 
        <div className="grid [grid-template-columns:40px_1fr]">
            <div className="border-r border-black">
                <HourColumn />
            </div>
            <DndCard />
        </div>
        }
    </div>
  );
}

export default TravelCard;