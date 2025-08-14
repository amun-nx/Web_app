import { createPortal } from "react-dom";

const Modal = ({showModal, onClose, onDelete}) => {
    if (!showModal) return null;
    
    return createPortal(
        <div className="fixed inset-0 bg-neutral-800/70 flex flex-col justify-center items-center z-50 overflow-y-auto overflow-x-hidden">
            <div className = "border border-color-black bg-white rounded-lg b-4 m-4 p-4">
                <div className="flex flex-col items-center">
                    <div className="">
                        Voulez-vous supprimer ce projet ?
                    </div>
                    <div className="flex flex-row justify-evenly w-full mt-4">
                        <button onClick={onClose} className="p-2 bg-gray-300 text-black rounded border-color-black">
                            Annuler
                        </button>
                        <button onClick={onDelete} className="p-2 bg-red-500 text-white rounded">
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal;