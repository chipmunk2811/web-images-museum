import * as ActionType from './types';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const GetDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GetDetail_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case ActionType.GetDetail_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case ActionType.GetDetail_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }
        default: return { ...state };

    }
}

export default GetDetailReducer;