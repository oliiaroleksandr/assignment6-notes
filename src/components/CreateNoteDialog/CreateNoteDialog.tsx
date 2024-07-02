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
import { PlusIcon } from "lucide-react";

const CreateNoteDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" /> Create note
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">Create note</DialogTitle>
        </DialogHeader>
        <CreateNoteForm onDialogClose={handleDialogClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
