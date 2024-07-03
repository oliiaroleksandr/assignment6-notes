import { Note, useNotesStore } from "@/store";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useCallback } from "react";
import SortableNote from "./SortableNote";

type Props = {
  notes: Note[];
};

const NotesDND = ({ notes }: Props) => {
  const swapNotes = useNotesStore((state) => state.swapNotes);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        const activeIndex = active.data.current?.sortable.index;
        const overIndex = over?.data?.current?.sortable.index;

        if (
          (!overIndex && overIndex !== 0) ||
          (!activeIndex && activeIndex !== 0)
        ) {
          return;
        }

        swapNotes(activeIndex, overIndex);
      }
    },
    [swapNotes]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={notes} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {notes.map((note) => (
            <SortableNote key={note.id} {...note} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default NotesDND;
