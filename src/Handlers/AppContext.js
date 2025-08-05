

import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext({

  inputText: {
    "serverdate": '',
    "showtemplatecard": false,
    "templatedata": {}
  },
  setInputText: () => { },
});


// Context provider
export const AppProvider = ({ children }) => {

  const [inputText, setInputText] = useState({
    "serverdate": '',
    "showtemplatecard": false,
    "templatedata": {}
  });

  return (
    <AppContext.Provider value={{ inputText, setInputText }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;


