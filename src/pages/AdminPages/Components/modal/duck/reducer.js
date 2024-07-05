import * as AcionType from './types';
const initialState = {
    loading: false,
    data: null,
    error: null,
};

const addImagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case AcionType.ADDIMAGES_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };

        }
        case AcionType.ADDIMAGES_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };

        }
        case AcionType.ADDIMAGES_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };

        }
        default:
            return { ...state };

    }
};
export default addImagesReducer;