import penIcon from "@/public/pen.svg";
import shareIcon from "@/public/share.svg";
import deleteIcon from "@/public/delete.svg";
import styles from "./Content.module.css";
import Image from "next/image";
import classNames from "classnames/bind";
import { ModalData } from "@/hooks/useModal";
import { Dispatch, SetStateAction } from "react";

const cx = classNames.bind(styles);

interface Props {
  targetFolder: {
    title: string;
    id: number;
  };
  setModalState: Dispatch<SetStateAction<ModalData>>;
}

export default function TitleBar({
  targetFolder,
  setModalState,
}: Props) {
  return (
    <div className={cx("selected-category")}>
      <h2 className={cx("h2")}>{targetFolder["title"]}</h2>
      {targetFolder["title"] === "전체" || (
        <div className={cx("folder-edits")}>
          <button
            className={cx("button", "edit-function")}
            onClick={() =>
              setModalState({
                state: true,
                target: "공유",
                folderName: targetFolder["title"],
              })
            }
          >
            <Image src={shareIcon} alt="shareIcon" />
            공유
          </button>
          <button
            className={cx("button", "edit-function")}
            onClick={() =>
              setModalState({
                state: true,
                target: "이름 변경",
                folderName: targetFolder["title"],
                folderId: targetFolder.id,
              })
            }
          >
            <Image src={penIcon} alt="penIcon" />
            이름 변경
          </button>
          <button
            className={cx("button", "edit-function")}
            onClick={() =>
              setModalState({
                state: true,
                target: "삭제",
                folderName: targetFolder["title"],
                folderId: targetFolder["id"],
              })
            }
          >
            <Image src={deleteIcon} alt="deleteIcon" />
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
