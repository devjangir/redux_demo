const InitialState = {
    counter:0
}

const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            const {counter} = state
            return {...state, counter:counter+action.payload}
        }
        case 'DECREMENT': {
            const {counter} = state
            return {...state, counter:counter-action.payload}
        }
        default:{
            return state
        }
    }
} 
export default reducer;