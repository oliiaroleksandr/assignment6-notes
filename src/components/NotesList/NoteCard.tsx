import { Note } from "@/store/notes";

type Props = Omit<Note, "id">;

const NoteCard = ({ title, backgroundColor, createdAt, isStarred }: Props) => {
  console.log(createdAt);

  const formattedDate = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-4 rounded-lg min-h-20" style={{ backgroundColor }}>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-10">
        {title}
      </h3>
      <div>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
      </div>
    </div>
  );
};

export default NoteCard;
