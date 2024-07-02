import { NoteSchema } from "@/validations";
import { useNotesStore } from "@/store/notes";
import { toast } from "sonner";
import NoteForm from "@/components/NoteForm";

type Props = {
  onDialogClose: () => void;
  id: string;
  defaultValues: NoteSchema;
};

const EditNoteForm = ({ onDialogClose, id, defaultValues }: Props) => {
  const editNote = useNotesStore((store) => store.editNote);

  const handleSubmit = ({ title, backgroundColor, isStarred }: NoteSchema) => {
    if (
      title === defaultValues.title &&
      backgroundColor === defaultValues.backgroundColor &&
      isStarred === defaultValues.isStarred
    ) {
      onDialogClose();
      return;
    }

    editNote(id, {
      title: title,
      isStarred: isStarred,
      backgroundColor: backgroundColor ?? "#edf0ee",
    });

    onDialogClose();
    toast.success("Edited note successfully");
  };

  return <NoteForm onSubmit={handleSubmit} defaultValues={defaultValues} />;
};

export default EditNoteForm;
