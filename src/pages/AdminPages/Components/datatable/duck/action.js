import api from '../../../../../utils/apiUtil';
import * as ActionType from './types';

export const actGetDetail = (id) => {
    return (dispatch) => {
        dispatch(actGetDetailRequest());
        api.get(`/quan-ly-hinh-anh/${id}`)
            .then((result) => {
                dispatch(actGetDetailSuccess(result.data.data))
            })
            .catch((error) => {
                dispatch(actGetDetailFail(error))
            })
    };
};

export const actGetDetailRequest = () => {
    return {
        type: ActionType.GetDetail_REQUEST,
    }
};

export const actGetDetailSuccess = (data) => {
    return {
        type: ActionType.GetDetail_SUCCESS,
        payload: data
    }
};

export const actGetDetailFail = (error) => {
    return {
        type: ActionType.GetDetail_FAIL,
        payload: error
    }
};