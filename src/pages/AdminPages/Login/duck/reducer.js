import * as AcionType from './types';
const initialState = {
    loading: false,
    data: null,
    error: null,
};

const authLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case AcionType.AUTH_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };

        }
        case AcionType.AUTH_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };

        }
        case AcionType.AUTH_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };

        }
        default:
            return { ...state };

    }
};
export default authLoginReducer;