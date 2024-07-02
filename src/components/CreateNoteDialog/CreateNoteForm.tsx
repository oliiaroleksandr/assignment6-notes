import { NoteSchema } from "@/validations";
import NoteForm from "../NoteForm";
import { useNotesStore } from "@/store/notes";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onDialogClose: () => void;
};

const CreateNoteForm = ({ onDialogClose }: Props) => {
  const addNote = useNotesStore((store) => store.addNote);

  const handleSubmit = (values: NoteSchema) => {
    const id = uuidv4();

    addNote({
      id,
      title: values.title,
      isStarred: values.isStarred,
      createdAt: new Date(),
      backgroundColor: values.backgroundColor ?? "#edf0ee",
    });

    toast.success("Created note successfully");
    onDialogClose();
  };

  return <NoteForm onSubmit={handleSubmit} />;
};

export default CreateNoteForm;
