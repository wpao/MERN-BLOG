// //
const initialState = {
    name: 'Paisal'
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'paozan'
        }
    }
    return state
}
export default globalReducer
