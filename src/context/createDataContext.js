import React, { useReducer } from "react";

export default (reducer, action, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const resolvedActions = {};

    // actions === {addBlogPost: (dispatch) => {return () => an Object{} } }
    for (let key in action) {
      resolvedActions[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...resolvedActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
