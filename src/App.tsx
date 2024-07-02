import { CreateNoteDialog, NotesList } from "./components";
import { ViewSelect } from "./components";

const App = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between gap-4 mb-10">
        <CreateNoteDialog />
        <ViewSelect />
      </div>
      <NotesList />
    </div>
  );
};

export default App;
