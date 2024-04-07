import { useState } from "react";
import styles from "./Modal.module.css";
import { useCreateFolder } from "@/hooks/useCreateFolder";

interface Props {
  cancelModal: () => void;
}
export default function AddFolderModal({ cancelModal }: Props) {
  const [inputValue, setInputValue] = useState("");
  const createFolderMutate = useCreateFolder();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    createFolderMutate(inputValue);
    cancelModal();
  };
  return (
    <>
      <h2 className={styles["modal-title"]}>폴더 추가</h2>
      <input
        className={styles["modal-input"]}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick} className={styles["modal-submit-btn"]}>
        추가하기
      </button>
    </>
  );
}
// 케밥 바깥 클릭시 닫히게
// HOC
