export const AddData = (data) => {
    return { type: 'ADD', payload: data }
}

export const UpdateData = (data) => {
    return { type: 'UPDATE', payload: data }
}


export const Setinput = (data) => {
    return { type: 'SETINPT', payload: data }
}