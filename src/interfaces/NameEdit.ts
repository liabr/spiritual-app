export interface NameEdit{
    initialUserName: string,
    editingName: string,
    onEditingUpdated:(newEditingString : string) => any,
    onNameUpdated: () => any,
    disabled: boolean
 }