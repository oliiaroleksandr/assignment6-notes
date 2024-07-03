import { Button } from "@/components/ui";
import { useNotesStore } from "@/store";
import { toast } from "sonner";

type Props = {
  id: string;
  onDialogClose: () => void;
};

const DeleteNoteButton = ({ id, onDialogClose }: Props) => {
  const removeNote = useNotesStore((store) => store.removeNote);

  const handleDelete = () => {
    removeNote(id);
    onDialogClose();
    toast.success("Note deleted successfully");
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteNoteButton;
