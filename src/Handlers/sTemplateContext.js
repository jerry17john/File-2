

import React, { createContext, useState } from 'react';

const STemplateContext = createContext({
    sTemplateJSON: {
        "consultation": [],
        "consultationEdit": {},
    },
    setSTemplateJSON: () => {},
});

export const STemplateProvider = ({ children }) => {
    const [sTemplateJSON, setSTemplateJSON] = useState({
        "consultation": [],
        "consultationEdit": {},
    });

    return (
        <STemplateContext.Provider value={{ sTemplateJSON, setSTemplateJSON }}>
            {children}
        </STemplateContext.Provider>
    );
};

export default STemplateContext;
