import React, { createContext, useState } from "react";
interface Modal {
  state: boolean;
  target: string;
  folderName: string;
  url: string;
}
export const ModalContext = createContext<Modal | null>(null);


export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalState, setModalState] = useState<Modal>({
    state: false,
    target: "",
    folderName: "",
    url: "",
  });

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
}
