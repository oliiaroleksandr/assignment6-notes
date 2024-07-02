import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import EditNoteForm from "./EditNoteForm";
import { NoteSchema } from "@/validations";
import { PencilIcon } from "lucide-react";

type Props = {
  id: string;
  defaultValues: NoteSchema;
};

const CreateNoteDialog = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full" aria-label="Edit">
          <PencilIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create note</DialogTitle>
        </DialogHeader>
        <EditNoteForm onDialogClose={handleDialogClose} {...props} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
