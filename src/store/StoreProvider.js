import React from 'react';
import {StoreContext} from './';

export function StoreProvider({store, children}) {

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )

}