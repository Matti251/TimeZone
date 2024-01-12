import { createContext, useContext } from "react";
export const Context = createContext();
export const useUserContext = () => {
  const context = useContext(Context);
  return context;
};
