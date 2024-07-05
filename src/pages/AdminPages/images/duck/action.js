import api from '../../../../utils/apiUtil';
import * as ActionType from './types';

export const actCustomImages = () => {
    return (dispatch) => {
        dispatch(actCustomImagesRequest());
        
        api.get(`/quan-ly-hinh-anh`)
            .then((result) => {
                dispatch(actCustomImagesSuccess(result.data.data))
            })
            .catch((error) => {
                dispatch(actCustomImagesFail(error))
            })
    };
};

export const actCustomImagesRequest = () => {
    return {
        type: ActionType.CUSTOMIMAGES_REQUEST,
    }
};

export const actCustomImagesSuccess = (data) => {
    return {
        type: ActionType.CUSTOMIMAGES_SUCCESS,
        payload: data
    }
};

export const actCustomImagesFail = (error) => {
    return {
        type: ActionType.CUSTOMIMAGES_FAIL,
        payload: error
    }
};