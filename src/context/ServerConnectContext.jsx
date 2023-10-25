import React, { createContext, useContext } from 'react'

import LocalServer from '../api/LocalServer';

export const ServerApiContext = createContext();

const test = new LocalServer();

export function ServerApiProvider({ children})
{
    return (
        <ServerApiContext.Provider value = {{test}} >
            {children}
        </ServerApiContext.Provider>
    )
}

export function useServerApi() {
    return useContext(ServerApiContext);
}