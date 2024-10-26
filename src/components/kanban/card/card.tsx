import React from 'react';
import { useDraggable } from '@dnd-kit/core';

interface CardProps {
    task: {
        Id: string;
        Title: string;
        Summary: string;
        Color: string;
    };
}

export const Card: React.FC<CardProps> = ({ task }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.Id,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        padding: '10px',
        margin: '10px 0',
        backgroundColor: task.Color,
        color: '#fff',
        borderRadius: '5px',
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <h4>{task.Title}</h4>
            <p>{task.Summary}</p>
        </div>
    );
};

