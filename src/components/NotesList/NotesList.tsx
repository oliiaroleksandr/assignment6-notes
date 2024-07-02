import { useNotesStore } from "@/store/notes";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const notes = useNotesStore((state) => {
    const { viewBy, notes } = state;
    if (viewBy === "all") return notes;
    return notes.filter((note) => note.isStarred === true);
  });

  if (notes.length === 0) return <p>No notes found</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesList;
