"use client";

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
import classNames from "classnames/bind";
import { UserFolder } from "@/api/api";
import { Case, Switch } from "react-if";
import { ModalData } from "@/hooks/useModal";
import { Dispatch, SetStateAction } from "react";

const cx = classNames.bind(styles);
enum FOLDER_NAME {
  FOLDER_SHARE = "공유",
  FOLDER_UPDATE = "이름 변경",
  FOLDER_DELETE = "삭제",
  FOLDER_ADD = "폴더추가",
  LINK_DELETE = "삭제하기",
  LINK_ADD = "폴더에 추가",
  LINK_ADD2 = "추가하기",
}

interface Props {
  state: ModalData;
  setModalState?: Dispatch<SetStateAction<ModalData>>;
  onClick: () => void;
  folderList: UserFolder[];
  setTargetFolder?: any;
}

export default function Modal({
  state,
  setModalState,
  onClick,
  folderList,
  setTargetFolder,
}: Props) {
  if (typeof window === "undefined") return <></>;

  const cancelModal = () => {
    onClick();
  };

  return createPortal(
    state.state && (
      <>
        <div className={cx("modal-background")} onClick={cancelModal} />
        <div className={cx("modal-container")}>
          <button className={cx("modal-close-btn")} onClick={cancelModal}>
            <Image
              className={cx("modal-close-icon")}
              src={modalCloseIcon}
              alt="modal-close-Image"
            />
          </button>
          <Switch>
            <Case condition={state["target"] === FOLDER_NAME.FOLDER_SHARE}>
              <ShareModal state={state} />
            </Case>
            <Case condition={state["target"] === FOLDER_NAME.FOLDER_UPDATE}>
              <NameChangeModal
                state={state}
                setTargetFolder={setTargetFolder}
                cancelModal={cancelModal}
              />
            </Case>
            <Case condition={state["target"] === FOLDER_NAME.FOLDER_DELETE}>
              <FolderDeleteModal state={state} cancelModal={cancelModal} />
            </Case>
            <Case condition={state["target"] === FOLDER_NAME.FOLDER_ADD}>
              <AddFolderModal cancelModal={cancelModal} />
            </Case>
            <Case condition={state["target"] === FOLDER_NAME.LINK_DELETE}>
              <LinkDeleteModal state={state} cancelModal={cancelModal} />
            </Case>
            <Case
              condition={
                state["target"] === FOLDER_NAME.LINK_ADD ||
                FOLDER_NAME.LINK_ADD2
              }
            >
              <AddLinkModal
                setModalState={setModalState}
                state={state}
                data={folderList}
              />
            </Case>
          </Switch>
        </div>
      </>
    ),
    document.body
  );
}
