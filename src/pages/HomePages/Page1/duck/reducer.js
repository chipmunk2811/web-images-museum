import * as ActionType from './types';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const page1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PAGE1_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case ActionType.PAGE1_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case ActionType.PAGE1_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }
        default: return { ...state };

    }
}

export default page1Reducer;