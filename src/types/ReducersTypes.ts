// Auth
export type AuthState = {
    authData: {
        // required
        email: string;
        password: string;
        // optionnal
        confirm_password?: string;
        username?: string;
    } | null;
};

export type ActionType = {
    payload?: any;
    type: string;
};
