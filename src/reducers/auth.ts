import { ActionType, AuthState } from '../types/ReducersTypes';

import { AUTH, LOGOUT } from '../controllers/constants';

const actions = (state: AuthState = { authData: null }, action: ActionType) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify(action?.payload));
            return { ...state, authData: action?.payload, loading: false, errors: null };

        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null, loading: false, errors: null };

        default:
            return state;
    }
};

export default actions;
