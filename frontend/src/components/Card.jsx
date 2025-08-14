import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({id, handleDeleteCard}) => {
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/create");
    };

    return (
        <div className="border border-black rounded-lg p-4 w-64 gap-4 shadow-md transition-transform hover:scale-105 ">
            <div className  = "w-full h-40">
                <img src="./paris.jpeg" ></img>
            </div>
            <div>
                <h2 className = "font-bold">Paris</h2>
                <p>Description</p>
            </div>
            <div className = "flex flex-row justify-evenly items-center">
                <button onClick = {handleEdit}>
                    <img src="./edit.svg" alt="edit" className = "h-8"/>
                </button>
                <button onClick = {()=>setShowModal(true)}>
                    <img src="./trash.svg" alt="delete" className = "h-8"/>
                </button>
                {showModal && (
                    <Modal 
                        showModal={showModal} 
                        onClose={() => setShowModal(false)} 
                        onDelete={() => {
                            handleDeleteCard(id);
                            setShowModal(false);
                        }} 
                    />
                )}
            </div>

        </div>
    );
}

export default Card;