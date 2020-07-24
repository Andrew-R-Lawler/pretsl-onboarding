const supportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_NEW_TICKET':
            return action.payload;
        default:
            return state;
    }
}

export default supportReducer;