import { createContext, useState } from "react";

export const QuizContext = createContext(null);

export const QuizContextProvider = ({ children }) => {
const [openModal, setOpenModal] = useState({open:false, modal:null,data:null})

  return <QuizContext.Provider value={{openModal,setOpenModal}}>{children}</QuizContext.Provider>;
};