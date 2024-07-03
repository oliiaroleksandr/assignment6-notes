import { NoteSchema } from "@/validations";
import { useNotesStore } from "@/store";
import { toast } from "sonner";
import NoteForm from "@/components/NoteForm";
import { shallowCompare } from "./utils";

type Props = {
  onDialogClose: () => void;
  id: string;
  defaultValues: NoteSchema;
};

const EditNoteForm = ({ onDialogClose, id, defaultValues }: Props) => {
  const editNote = useNotesStore((store) => store.editNote);

  const handleSubmit = (newValues: NoteSchema) => {
    if (shallowCompare(newValues, defaultValues)) {
      onDialogClose();
      return;
    }

    editNote(id, newValues);

    onDialogClose();
    toast.success("Edited note successfully");
  };

  return <NoteForm onSubmit={handleSubmit} defaultValues={defaultValues} />;
};

export default EditNoteForm;
