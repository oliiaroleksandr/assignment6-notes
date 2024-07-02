import { useNotesStore } from "@/store/notes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui";

const options = [
  { label: "All", value: "all" },
  { label: "Starred", value: "starred" },
];

const ViewSelect = () => {
  const viewBy = useNotesStore((state) => state.viewBy);
  const setViewBy = useNotesStore((state) => state.setViewBy);

  return (
    <Select value={viewBy} onValueChange={setViewBy}>
      <SelectTrigger className="w-[10rem]">
        <SelectValue placeholder="View by" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ViewSelect;
