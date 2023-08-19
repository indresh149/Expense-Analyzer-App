import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    userID:'',
    authenticate: (token) => { },
    getUserID: (userID) => { },
    logout: () => { },
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
     const [userID, setUserID] = useState();

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function getUserID(userID) {
        setUserID(userID);
        AsyncStorage.setItem('userID', userID);
    }


    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        userID: userID,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        getUserID: getUserID,
        logout: logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;