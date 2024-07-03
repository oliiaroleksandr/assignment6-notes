import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(1, { message: "Title must be at least 1 character" }),
  isStarred: z.boolean(),
  backgroundColor: z.string(),
  textColor: z.string(),
});

export type NoteSchema = z.infer<typeof noteSchema>;
