import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
  Checkbox,
  AutosizeTextarea,
} from "./ui";
import { NoteSchema, noteSchema } from "@/validations";

type Props = {
  onSubmit: (values: NoteSchema) => void;
  defaultValues?: NoteSchema;
};

const localDefaultValues: NoteSchema = {
  title: "",
  isStarred: false,
  backgroundColor: "#edf0ee",
  textColor: "#000000",
};

const NoteForm = ({ onSubmit, defaultValues }: Props) => {
  const form = useForm<NoteSchema>({
    resolver: zodResolver(noteSchema),
    defaultValues: defaultValues ?? localDefaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <AutosizeTextarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="backgroundColor"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4 cursor-pointer">
              <FormControl>
                <Input type="color" variant="backgroundColor" {...field} />
              </FormControl>
              <FormLabel className="!mt-0">Background color</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="textColor"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="color"
                  variant="backgroundColor"
                  className="sr-only"
                  {...field}
                />
              </FormControl>
              <FormLabel className="!mt-0 ml-[5px] flex items-center gap-5 cursor-pointer">
                <span
                  className="text-xl w-6 flex items-center justify-center border-b-[6px]"
                  style={{
                    borderColor: field.value,
                  }}
                >
                  A
                </span>
                <span>Text color</span>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isStarred"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 pt-2.5">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="!m-0">Check to make note starred</FormLabel>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default NoteForm;
