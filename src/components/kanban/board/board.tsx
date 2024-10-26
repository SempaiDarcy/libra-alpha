import {useState} from 'react';
import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {kanbanData, kanbanGrid} from "../../../data/database.ts";
import {Column} from "../column/column.tsx";
import {Header} from "../../header/header.tsx";


interface Task {
    Id: string;
    Title: string;
    Status: string;
    Summary: string;
    Color: string;
}

export const Board = () => {
    const [tasks, setTasks] = useState<Task[]>(kanbanData);

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;
        if (over && active.id !== over.id) {
            setTasks(prevTasks => {
                return prevTasks.map(task =>
                    task.Id === active.id.toString() ? {...task, Status: over.id.toString()} : task
                );
            });
        }
    };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <div className="flex">
                <Header category="App" title="Kanban"/>
            </div>
            <div className="flex justify-center">
                <DndContext onDragEnd={handleDragEnd}>
                    <div style={{display: 'flex', gap: '10px'}}>
                        {kanbanGrid.map((column) => (
                            <Column
                                key={column.keyField}
                                column={column}
                                tasks={tasks.filter(task => task.Status === column.keyField)}
                            />
                        ))}
                    </div>
                </DndContext>
            </div>
        </div>
    );
};
