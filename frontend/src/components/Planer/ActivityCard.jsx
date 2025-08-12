import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';

const ActivityCard = ({id}) => {
    const [SidePanel, setSidePanel] = useState(false);
    const buttonRef = useRef(null); // Reference for the button to position the side panel
    
    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    
    return (
        <>
            <div style={{}}>
            <ResizableBox width={220} height={30} minConstraints={[220, 30]} maxConstraints={[220, 500]} resizeHandles={['s']}>
                <div ref={setNodeRef} {...attributes} {...listeners} style={style} className = "flex flex-row border border-black rounded-lg h-full w-full bg-gray-100" >
                    <div className = "p-2">
                        <img src = "./plane.png" className = "h-6"></img>
                    </div>
                    <div className = "p-2">
                        <h2>Nom activité {id}</h2>
                    </div>
                    <div className="ml-auto p-2">
                        <button ref={buttonRef} onClick={() => setSidePanel(!SidePanel)}>
                            <img src="./right_arrow.svg" alt="info" className = "h-6"/>
                        </button>
                    </div>
                    {SidePanel && createPortal(
                    <div className="fixed inset-0 z-50 pointer-events-none">
                        <div className="flex flex-col fixed bg-white border border-black rounded-lg p-4 shadow-lg pointer-events-auto left-90 top-40">
                            <div>
                                <h2>Nom d'activité</h2>
                                <hr className="border-t border-gray-300 my-4" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img src="./plane.png" alt="" className = "h-30"/>
                            </div>
                            <div>
                                <hr className="border-t border-gray-300 my-4" />
                                <p>Lieu: Paris</p>
                            </div>
                            <div>
                                <hr className="border-t border-gray-300 my-4" />
                                <p>Description de l'activité</p>
                            </div>
                            <div>
                                <hr className="border-t border-gray-300 my-4" />
                                <div className = "flex flex-row justify-between">
                                    <input type="time" className="border rounded-lg p-2 m-2" />
                                    <input type="time" className="border rounded-lg p-2 m-2" />
                                </div>
                            </div>
                            <div>
                                <hr className="border-t border-gray-300 my-4" />
                                <p>Coût: 100$</p>
                            </div>
                            <div>
                                <hr className="border-t border-gray-300 my-4" />
                                <p>Participants: Alice, Bob</p>
                            </div>
                            <div>
                                <hr className="border-t border-gray-300 my-4" />
                                <p>Notes: Apporter des parapluies</p>
                            </div>
                            <hr className="border-t border-gray-300 my-4" />
            
                            <button onClick={() => setSidePanel(false)}>Fermer</button>
                        </div>
                    </div>,
                    document.body
                    )}
                </div>
            </ResizableBox>
            </div>
        </>
    );
}

export default ActivityCard;