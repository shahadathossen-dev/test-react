import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// export const withContext = () => useContext(AppContext);

// export const WithContext = (Child) => (props) =>
//   (
//     <AppContext.Consumer>
//       {(context) => <Child {...props} {...context} />}
//       {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
//     </AppContext.Consumer>
//   );
