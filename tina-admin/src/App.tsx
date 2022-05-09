import TinaCMS, { TinaAdmin } from "tinacms";
import { TinaEditProvider, setEditing } from "tinacms/dist/edit-state";

function App() {
  setEditing(true);

  const branch = "add-tina-cms";
  const clientId = "23d31530-9728-4343-99a7-a28a4017831f";
  const apiURL =
    process.env.NODE_ENV == "development"
      ? "http://localhost:4001/graphql"
      : `https://content.tinajs.io/content/${clientId}/github/${branch}`;

  return (
    <TinaEditProvider
      editMode={
        <TinaCMS apiURL={apiURL}>
          <TinaAdmin />
        </TinaCMS>
      }
    >
      <div>Need to be in edit mode!</div>
    </TinaEditProvider>
  );
}

export default App;
