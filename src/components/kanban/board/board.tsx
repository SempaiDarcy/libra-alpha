import React, {useState} from 'react';
import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {kanbanData, kanbanGrid} from "../../../data/database.ts";
import Column from "../column/column.tsx";


interface Task {
    Id: string;
    Title: string;
    Status: string;
    Summary: string;
    Color: string;
}

export const Board: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(kanbanData);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setTasks(prevTasks => {
                return prevTasks.map(task =>
                    task.Id === active.id.toString() ? {...task, Status: over.id.toString()} : task
                );
            });
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', gap: '10px' }}>
                {kanbanGrid.map((column) => (
                    <Column
                        key={column.keyField}
                        column={column}
                        tasks={tasks.filter(task => task.Status === column.keyField)}
                    />
                ))}
            </div>
        </DndContext>
    );
};
