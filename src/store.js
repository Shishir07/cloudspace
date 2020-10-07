import React, {createContext, useReducer, useEffect} from 'react';

const initialState = {
    isAuthenticated: false
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {

    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'authenticationSuccessful':
                return {...state, isAuthenticated: true}// do somethsing with the action
            case 'authenticationUnsuccessful':
                return {...state, isAuthenticated: false}
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }