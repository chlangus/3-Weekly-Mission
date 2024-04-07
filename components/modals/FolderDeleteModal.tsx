import { ModalData } from "@/hooks/useModal";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import { useDeleteFolder } from "@/hooks/useDeleteFolder";

const cx = classNames.bind(styles);

interface Props {
  state: ModalData;
  cancelModal: () => void;
}

export default function FolderDeleteModal({ state, cancelModal }: Props) {
  const deleteMutate = useDeleteFolder();
  const handleClick = () => {
    deleteMutate(Number(state.folderId));
    cancelModal();
  };
  return (
    <>
      <h2 className={cx("modal-title", "having-folder-and-link")}>폴더 삭제</h2>
      <h3 className={cx("link-and-folder-name")}>{state["folderName"]}</h3>
      <button
        className={cx("modal-submit-btn", "modal-delete-btn")}
        onClick={handleClick}
      >
        삭제하기
      </button>
    </>
  );
}
