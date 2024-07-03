import { useNotesStore } from "@/store";
import { NotesDND } from "./NotesDND";

const NotesList = () => {
  const notes = useNotesStore((state) => {
    const { viewBy, notes } = state;
    if (viewBy === "all") return notes;
    return notes.filter((note) => note.isStarred === true);
  });

  if (notes.length === 0) return <p>No notes found</p>;

  return <NotesDND notes={notes} />;
};

export default NotesList;
