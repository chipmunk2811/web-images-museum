import * as ActionType from './types';
import api from '../../../../../utils/apiUtil';
import {actCustomImages} from '../../../images/duck/action';

export const actAddImages = (data) => {
    return (dispatch) => {
        dispatch(actAddImagesRequest());
        api.post('/quan-ly-hinh-anh', data,{ 'Content-Type': 'multipart/form-data'})
            .then((result) => {
                if(result.data.statusCode===200) dispatch(actCustomImages());
            })
            .catch((error) => {
                
                dispatch(actAddImagesFail(error));
            });
    };
};


export const actAddImagesRequest = () => {
    return {
        type: ActionType.ADDIMAGES_REQUEST,
    }
};

export const actAddImagesSuccess = (data) => {
    return {
        type: ActionType.ADDIMAGES_SUCCESS,
        payload: data,
    }
};

export const actAddImagesFail = (error) => {
    return {
        type: ActionType.ADDIMAGES_FAIL,
        payload: error,
    }
};