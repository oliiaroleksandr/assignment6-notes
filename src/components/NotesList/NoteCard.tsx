import { Note } from "@/store/notes";
import { DeleteNoteDialog } from "./DeleteNoteDialog";


const NoteCard = ({
  id,
  title,
  backgroundColor,
  createdAt,
}: Note) => {
  return (
    <div className="p-4 rounded-lg min-h-20" style={{ backgroundColor }}>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-10">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <p className="text-sm">{createdAt}</p>
        <div>
          <DeleteNoteDialog id={id} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
