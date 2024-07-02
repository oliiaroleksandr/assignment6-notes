import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Note = {
  id: string;
  title: string;
  backgroundColor: string;
  createdAt: Date;
  isStarred: boolean;
};

type ViewBy = "starred" | "all";

type NotesState = {
  notes: Note[];
  viewBy: ViewBy;
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
  editNote: (id: string, note: Partial<Note>) => void;
  swapNotes: (index1: number, index2: number) => void;
  setViewBy: (viewBy: ViewBy) => void;
};

export const useNotesStore = create(
  persist<NotesState>(
    (set) => ({
      notes: [],
      viewBy: "all",
      addNote: (note) => {
        set((state) => ({
          notes: [...state.notes, note],
        }));
      },
      removeNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }));
      },
      editNote: (id, note) => {
        set((state) => ({
          notes: state.notes.map((noteItem) => {
            if (noteItem.id === id) {
              return { ...noteItem, ...note };
            }

            return noteItem;
          }),
        }));
      },
      swapNotes: (index1, index2) => {
        set((state) => {
          const copy = [...state.notes];
          const temp = copy[index1];
          copy[index1] = copy[index2];
          copy[index2] = temp;

          return {
            notes: copy,
          };
        });
      },
      setViewBy: (viewBy) => {
        set(() => ({
          viewBy,
        }));
      },
    }),
    {
      name: "notes-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
