import { AlertDialogAction } from "@/components/ui";
import { useNotesStore } from "@/store/notes";
import { toast } from "sonner";

type Props = {
  id: string;
};

const DeleteNoteButton = ({ id }: Props) => {
  const removeNote = useNotesStore((store) => store.removeNote);

  const handleDelete = () => {
    removeNote(id);
    toast.success("Note deleted successfully");
  };

  return <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>;
};

export default DeleteNoteButton;
