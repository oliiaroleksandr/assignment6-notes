import { useState } from "react";
import CreateNoteForm from "./CreateNoteForm";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui";

const CreateNoteDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create note</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create note</DialogTitle>
        </DialogHeader>
        <CreateNoteForm onDialogClose={handleDialogClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
