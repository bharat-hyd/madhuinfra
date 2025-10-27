import { Children, createContext, useContext, useState } from "react";
import ContactModal from "../ContactModal";

const ModalContext = createContext();
export const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <ModalContext.Provider value={{openModal,closeModal}} >
            {children}
            {isOpen && <ContactModal onClose={closeModal} />}
        </ModalContext.Provider>
    )
}
export const useModal = () => useContext(ModalContext);
