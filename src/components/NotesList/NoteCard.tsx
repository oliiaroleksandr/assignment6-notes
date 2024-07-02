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
    <div className="px-6 py-4 rounded-2xl min-h-20 flex flex-col justify-between" style={{ backgroundColor }}>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-16">
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
