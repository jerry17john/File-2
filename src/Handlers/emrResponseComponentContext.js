// import React from 'react'
// const EmrResponseComponentContext = React.createContext({
//     responseJSON: {
//         "consultation": [],
//         "consultationEdit": {
//         }
//     },
//     setResponseJSON: () => { }
// })
// export const EmrResponseComponentProvider = EmrResponseComponentContext.Provider
// export default EmrResponseComponentContext

import React, { createContext, useState } from 'react';

const EmrResponseComponentContext = createContext({
    responseJSON: {
        "consultation": [],
        "consultationEdit": {},
    },
    setResponseJSON: () => {},
});

export const EmrResponseComponentProvider = ({ children }) => {
    const [responseJSON, setResponseJSON] = useState({
        "consultation": [],
        "consultationEdit": {},
    });

    return (
        <EmrResponseComponentContext.Provider value={{ responseJSON, setResponseJSON }}>
            {children}
        </EmrResponseComponentContext.Provider>
    );
};

export default EmrResponseComponentContext;
