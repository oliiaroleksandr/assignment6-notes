import { Note } from "@/store/notes";
import { DeleteNoteDialog } from "./DeleteNoteDialog";
import { EditNoteDialog } from "./EditNoteDialog";
import { Star } from "lucide-react";

const NoteCard = ({
  id,
  title,
  backgroundColor,
  createdAt,
  isStarred,
}: Note) => {
  return (
    <div
      className="px-6 pb-4 pt-6 rounded-2xl min-h-20 flex flex-col justify-between"
      style={{ backgroundColor }}
    >
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-20">
        {isStarred ? (
          <span className="float-right ml-2 mb-2 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-yellow-500">
            <Star className="w-3.5 h-3.5 fill-current" />
          </span>
        ) : null}
        {title}
      </h3>
      <div className="flex items-center gap-2 justify-between">
        <p className="text-sm">{createdAt}</p>
        <div className="flex gap-1.5 items-center">
          <EditNoteDialog
            id={id}
            defaultValues={{ title, backgroundColor, isStarred }}
          />
          <DeleteNoteDialog id={id} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
