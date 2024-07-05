import * as ActionType from './types';
const initialState = {
    manhinh: parseInt(localStorage.getItem('manhinh')) || 1,
    Navlink: JSON.parse(localStorage.getItem('Navlink')) || [{ link: '/', namePage: 'BẢN ĐỒ', icon: 'las la-map' },
    { link: '/page2', namePage: 'TƯ LIỆU HÌNH ẢNH', icon: 'las la-image' },
    { link: '/page3', namePage: 'NHỮNG CÂY CẦU', icon: 'las la-ship' },
    { link: '/page4', namePage: 'VĂN HÓA SÔNG NƯỚC', icon: 'las la-water' }
    ],
}

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SETTING_GET: {
            return { ...state }
        }
        case ActionType.SETTING_SCREEN: {
            localStorage.setItem('manhinh', action.payload.toString());
            state.manhinh = action.payload
            return { ...state }
        }
        case ActionType.SETTING_CREATE: {
            state.Navlink =action.payload;
            return { ...state }
        }
        case ActionType.SETTING_DELETE: {
            state.Navlink =action.payload;
            return { ...state }
        }
        default: return { ...state };

    }
}

export default settingReducer;