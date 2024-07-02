import { CreateNoteDialog } from "./components";
import { ViewSelect } from "./components";

const App = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between gap-4">
        <CreateNoteDialog />
        <ViewSelect />
      </div>
    </div>
  );
};

export default App;
