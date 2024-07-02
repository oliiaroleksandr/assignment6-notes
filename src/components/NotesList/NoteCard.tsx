import { Note } from "@/store/notes";
import { DeleteNoteDialog } from "./DeleteNoteDialog";
import { EditNoteDialog } from "./EditNoteDialog";

const NoteCard = ({
  id,
  title,
  backgroundColor,
  createdAt,
  isStarred,
}: Note) => {
  return (
    <div className="p-4 rounded-lg min-h-20" style={{ backgroundColor }}>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-16">
        {title}
      </h3>
      <div className="flex items-center gap-2 justify-between">
        <p className="text-sm">{createdAt}</p>
        <div className="flex gap-1 items-center">
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
