export interface NameEdit{
    initialUserName: string,
    editingName: string,
    onEditingUpdated(newEditingString : string): () => any,
    onNameUpdated(): () => void,
    disabled: boolean
 }