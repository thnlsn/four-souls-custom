import React, { useState, useCallback, createContext, useContext } from 'react';
import { initialState } from './initialState';

const FourSouls = createContext(initialState);
const FourSoulsContextProvider = ({ children }) => {
    //~ //////////////
    //* State ////////
    //~ //////////////

    //~ //////////////
    //* Async ////////
    //~ //////////////

    const value = {};
    return (
        <FourSouls.Provider value={value}>{children}</FourSouls.Provider>
    );
}

const useFourSoulsContext = () => {
    return useContext(FourSouls);
}

export { FourSoulsContextProvider, useFourSoulsContext }