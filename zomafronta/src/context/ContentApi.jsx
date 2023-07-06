
import React, { createContext } from 'react'

export const ContentApi=createContext()

export const ContentApiProvider = ({children}) => {

return <ContentApi.Provider value={{}}>
{children}
</ContentApi.Provider>
}




