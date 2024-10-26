import {useDroppable} from '@dnd-kit/core';
import {Card} from "../card/card.tsx";


interface ColumnProps {
    column: {
        headerText: string;
        keyField: string;
    };
    tasks: {
        Id: string;
        Title: string;
        Summary: string;
        Color: string;
    }[];
}

export const Column = ({column, tasks}: ColumnProps) => {
    const {setNodeRef} = useDroppable({
        id: column.keyField,
    });

    return (
        <div ref={setNodeRef} style={{padding: '10px', width: '250px', backgroundColor: '#f5f5f5'}}>
            <h3>{column.headerText}</h3>
            {tasks.map(task => (
                <Card key={task.Id} task={task}/>
            ))}
        </div>
    );
};

