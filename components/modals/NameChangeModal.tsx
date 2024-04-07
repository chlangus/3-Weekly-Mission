import { ModalData } from "@/hooks/useModal";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { useChangeFolderName } from "@/hooks/useChangeFolderName";

const cx = classNames.bind(styles);

interface Props {
  state: ModalData;
  cancelModal: () => void;
  setTargetFolder: any;
}

export default function NameChangeModal({
  state,
  cancelModal,
  setTargetFolder,
}: Props) {
  const [inputValue, setInputValue] = useState(state["folderName"]);
  const changeFolderNameMutate = useChangeFolderName();

  const handleClick = () => {
    changeFolderNameMutate({ folderId: state.folderId, name: inputValue });
    setTargetFolder((prev: any) => ({ ...prev, title: inputValue }));
    cancelModal();
  };
  return (
    <>
      <h2 className={cx("modal-title")}>폴더 이름 변경</h2>
      <input
        className={cx("modal-input")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick} className={cx("modal-submit-btn")}>
        변경하기
      </button>
    </>
  );
}
