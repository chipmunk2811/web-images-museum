import * as ActionType from './types';
import api from '../../../../utils/apiUtil';

export const actAuthLogin = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest());
        api.post('/quan-ly-user/dangnhap', user)
            .then((result) => {
                if (result.data.statusCode ===500) {
                    dispatch(actAuthFail(result.data.message));
                }
                if (result.data.statusCode ===202) {
                    dispatch(actAuthSuccess(result.data.data));
                    // Save local storage
                    const now = new Date();
                    const expiry = now.getTime() + 720 * 60 * 1000;
                    const items={
                        token: result.data.data.token,
                        expiry
                    }
                    localStorage.setItem('UserAdmin',JSON.stringify(items))
                    // Redirect to admin
                    // navigate("/admin", { replace: true });
                }
               
            })
            .catch((error) => {
                dispatch(actAuthFail(error));
            });
    };
};


export const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    }
};

export const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    }
};

export const actAuthFail = (error) => {
    return {
        type: ActionType.AUTH_FAIL,
        payload: error,
    }
};