import { combineReducers } from "redux";
import authLoginReducer from '../pages/AdminPages/Login/duck/reducer';
import customImagesReducer from '../pages/AdminPages/images/duck/reducer';
import addImagesReducer from '../pages/AdminPages/Components/modal/duck/reducer';
import GetDetailReducer from '../pages/AdminPages/Components/datatable/duck/reducer';
import page1Reducer from '../pages/HomePages/Page1/duck/reducer';
import settingReducer from '../pages/AdminPages/setting/duck/reducer';
const rootReducer = combineReducers({
    authLoginReducer,
    customImagesReducer,
    addImagesReducer,
    GetDetailReducer,
    page1Reducer,
    settingReducer
});

export default rootReducer;