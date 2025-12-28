import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { tasks as data } from "../data/kanban";

export default function KanbanPage() {
  const [tasks, setTasks] = useState(data);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);
    setTasks(items);
  };

  return (
    <div className="p-6">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="kanban">
          {(p) => (
            <div ref={p.innerRef} {...p.droppableProps} className="space-y-3">
              {tasks.map((t, i) => (
                <Draggable key={t.id} draggableId={t.id} index={i}>
                  {(p) => (
                    <div
                      ref={p.innerRef}
                      {...p.draggableProps}
                      {...p.dragHandleProps}
                      className="bg-white p-4 rounded shadow"
                    >
                      {t.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {p.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
