const initialData = {
    list: []
}

const todoReducer = (state = initialData, action) => {
    switch(action.type){
        case 'ADD_TODO':
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

            case 'REMOVE_TODO':
            const newList = state.list.filter((element) => element.id !== action.id);
            return {
                ...state,
                list: newList
            }

            default:
                return state;
    }
}

export default todoReducer;