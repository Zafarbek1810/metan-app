import React, {useCallback, useReducer} from 'react';
import GlobalContext from "./Context";

const initialState = {
  savdo_id: null,

}

function reducer(state, action) {
  switch (action.type) {
    case "SAVDO_NUQTALARI_EDIT" : {
      return {
        savdo_id: action.payload
      }
    }
    case "SAVDO_NUQTALARI_NULL": {
      return {
        savdo_id: null
      }
    }
  }
}


const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const savdo_edit = useCallback(
    function savdo_edit(id) {
      dispatch({
        type: "SAVDO_NUQTALARI_EDIT",
        payload: id,
      })
    }, [])

  const savdo_null = useCallback(
    function savdo_null() {
      dispatch({
        type: "SAVDO_NUQTALARI_NULL",
      })
    }, [])

  return (
    <GlobalContext.Provider value={{
      savdo_edit,
      savdo_null,
      state
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;