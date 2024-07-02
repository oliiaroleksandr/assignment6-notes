import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
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
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button size="icon" className="rounded-full" aria-label="Edit">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>Edit note</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">Edit note</DialogTitle>
        </DialogHeader>
        <EditNoteForm onDialogClose={handleDialogClose} {...props} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
