import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer"

const initState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  FetchData: false,
  error: false,
}

export const Context = createContext(initState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])

  return (
    <Context.Provider
      value={{
        user: state.user,
        FetchData: state.FetchData,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
