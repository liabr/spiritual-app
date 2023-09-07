import React from "react";
import { NameEdit } from "../interfaces/NameEdit";

export const NameEditComponent: React.FC<NameEdit> = (props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onEditingUpdated(e.target.value);
      };
    
    const onNameSubmit = (event: any): any => {
        props.onNameUpdated();
      };
    
    return (
        <>
          <label>Update name:</label>
          <input value={props.editingName} onChange={onChange} />
          <button 
            onClick={onNameSubmit}
            disabled={props.disabled}>Change</button>
        </>
      );
    };
 