import React, { useState } from 'react';
import { DndContext, useDraggable, closestCenter } from '@dnd-kit/core';
import {useSortable, SortableContext, verticalListSortingStrategy, arrayMove} from '@dnd-kit/sortable';

import ActivityCard from './ActivityCard';


const DndCard = () => {
    const [card, setCard] = useState([1,2,3]);

    const handleDragEnd = (event) => {
        const {active, over} = event;
        if (active.id !== over.id) {
            setCard((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }


    return(
    <>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
            <div className="grid [grid-template-rows:repeat(48,_30px)]">
                {card.map((id) =>(
                    <ActivityCard key={id} id={id} />
                ))}
            </div>
        </DndContext>
    </>

    );
}

export default DndCard;