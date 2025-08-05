import React from 'react'
const AgeGroupResponseComponentContext = React.createContext({
    responseJSON: {
        "consultation": [],
        "consultationEdit": {
        }
    },
    setResponseJSON: () => { }
})
export const AgeGroupResponseComponentProvider = AgeGroupResponseComponentContext.Provider
export default AgeGroupResponseComponentContext