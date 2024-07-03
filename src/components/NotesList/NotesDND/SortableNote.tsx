import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import NoteCard from "./NoteCard";
import { Note } from "@/store";
import { CSSProperties } from "react";

const SortableNote = ({ id, ...note }: Note) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const inlineStyles: CSSProperties = {
    opacity: isDragging ? "0.5" : "1",
    transformOrigin: "50% 50%",
    cursor: isDragging ? "grabbing" : "grab",
    transform: CSS.Transform.toString(transform),
    transition: transition || "opacity 0.05s linear",
  };

  return (
    <div
      ref={setNodeRef}
      style={inlineStyles}
      {...attributes}
      {...listeners}
      className="touch-none"
    >
      <NoteCard id={id} {...note} />
    </div>
  );
};

export default SortableNote;
