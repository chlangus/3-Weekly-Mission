import useGetFolderList from "../../hooks/useGetFolderList";
import modalCloseIcon from "@/public/modal_close_icon.svg";
import styles from "./Modal.module.css";
import Image from "next/image";
import { createPortal } from "react-dom";
import ShareModal from "./ShareModal";
import NameChangeModal from "./NameChangeModal";
import AddFolderModal from "./AddFolderModal";
import AddLinkModal from "./AddLinkModal";
import FolderDeleteModal from "./FolderDeleteModal";
import LinkDeleteModal from "./LinkDeleteModal";

enum FOLDER_NAME {
  FOLDER_SHARE = "공유",
  FOLDER_UPDATE = "이름 변경",
  FOLDER_DELETE = "삭제",
  FOLDER_ADD = "폴더 추가",
  LINK_DELETE = "삭제하기",
  LINK_ADD = "폴더에 추가",
  LINK_ADD2 = "추가하기",
}

export default function Modal({ state, onClick, link }: any) {
  const folderList = useGetFolderList();

  if (typeof window === "undefined") return <></>;

  const cancelModal = (e: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick();
  };

  return createPortal(
    <>
      {state["state"] && (
        <>
          <div className={styles["modal-background"]} onClick={cancelModal} />
          <div className={styles["modal-container"]}>
            <button className={styles["modal-close-btn"]} onClick={cancelModal}>
              <Image
                className={styles["modal-close-icon"]}
                src={modalCloseIcon}
                alt="modal-close-Image"
              />
            </button>
            {(state["target"] === FOLDER_NAME.FOLDER_SHARE && <ShareModal state={state} />) ||
              (state["target"] === FOLDER_NAME.FOLDER_UPDATE && (
                <NameChangeModal state={state} />
              )) ||
              (state["target"] === FOLDER_NAME.FOLDER_DELETE && (
                <FolderDeleteModal state={state} />
              )) ||
              (state["target"] === FOLDER_NAME.FOLDER_ADD && (
                <AddFolderModal state={state} />
              )) ||
              (state["target"] === FOLDER_NAME.LINK_DELETE && (
                <LinkDeleteModal state={state} />
              )) ||
              ((state["target"] === FOLDER_NAME.LINK_ADD || FOLDER_NAME.LINK_ADD2) && (
                <AddLinkModal state={state} data={folderList} link={link} />
              ))}
          </div>
        </>
      )}
    </>,
    document.body
  );
}
