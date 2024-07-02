import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters" }),
  isStarred: z.boolean(),
  backgroundColor: z.string().optional(),
});

export type NoteSchema = z.infer<typeof noteSchema>;
