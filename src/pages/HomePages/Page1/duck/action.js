import api from '../../../../utils/apiUtil';
import * as ActionType from './types';


export const actPAGE1 = (pagescreen) => {
    const { page ,manhinh} = pagescreen;
    return (dispatch) => {
        dispatch(actPAGE1Request());
        api.post(`/quan-ly-hinh-anh/pagescreen?page=${page}&manhinh=${manhinh}`)
            .then((result) => {
                dispatch(actPAGE1Success(result.data.data))
            })
            .catch((error) => {
                dispatch(actPAGE1Fail(error))
            })
    };
};

export const actPAGE1Request = () => {
    return {
        type: ActionType.PAGE1_REQUEST,
    }
};

export const actPAGE1Success = (data) => {
    return {
        type: ActionType.PAGE1_SUCCESS,
        payload: data
    }
};

export const actPAGE1Fail = (error) => {
    return {
        type: ActionType.PAGE1_FAIL,
        payload: error
    }
};