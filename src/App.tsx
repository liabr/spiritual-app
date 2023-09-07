import * as React from "react";
import { NameEditComponent, ColorBrowser, ColorPicker } from "./components";
import { Color } from "./models/color";
import {Accordion} from "./components/HomePage";

export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [editingName, setEditingName] = React.useState("defaultUserName");
  const [color, setColor] = React.useState<Color>({
    red: 90,
    green: 40,
    blue: 180
  });

  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 500);
  };

  React.useEffect(() => {
    loadUsername();
  }, []);

  const setUsernameState = () => {
    setName(editingName);
  };

  return (
    <>      
      <ColorBrowser color={color} onColorUpdated={setColor}  />
      <ColorPicker color={color} onColorUpdated={setColor}/>
      <NameEditComponent 
      initialUserName={name}
      editingName={editingName}
      onEditingUpdated={setEditingName}
      onNameUpdated={setUsernameState}
      disabled={editingName === ""|| editingName === name}/>
      <Accordion></Accordion>
    </>
  );
};

export default App;