import { Modal } from "@/hooks/useModal";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import { deleteFolder } from "@/api/api";
import { QueryClient } from "@tanstack/react-query";

const cx = classNames.bind(styles);

interface Props {
  state: Modal;
  cancelModal: any;
}

const queryClient = new QueryClient();

export default function FolderDeleteModal({ state, cancelModal }: Props) {
  const handleClick = () => {
    deleteFolder(Number(state.folderId));
    queryClient.invalidateQueries({ queryKey: ["readFolderList"] });
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
