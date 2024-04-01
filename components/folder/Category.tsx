import plusImg from "@/public/plus_img.svg";
import { Modal } from "@/hooks/useModal";
import Image from "next/image";
import styles from "./Content.module.css";
import classNames from "classnames/bind";
import { Dispatch, SetStateAction } from "react";
import { UserFolder } from "@/api/api";

const cx = classNames.bind(styles);

interface Props {
  targetFolder: {
    title: string;
    id: number;
  };
  setModalState: Dispatch<SetStateAction<Modal>>;
  handleClick: (title: string, id: number) => void;
  folderList: UserFolder[];
}
export default function Category({
  targetFolder,
  handleClick,
  folderList,
  setModalState,
}: Props) {
  return (
    <div className={cx("folder-title-container")}>
      <div className={cx("folder-title-wrapper")}>
        <button
          className={cx(
            "button",
            "folder-title",
            targetFolder["title"] === "전체" && "selected"
          )}
          onClick={() => handleClick("전체", 0)}
        >
          전체
        </button>
        {folderList?.map((folder) => (
          <button
            className={cx(
              "button",
              "folder-title",
              targetFolder.id === folder.id && "selected"
            )}
            key={folder.id}
            onClick={() => {
              handleClick(folder.name, folder.id);
            }}
          >
            {folder.name}
          </button>
        ))}
      </div>
      <button
        className={cx("button", "plus-btn", "add-folder-btn-wrapper")}
        onClick={() =>
          setModalState({
            state: true,
            target: "폴더추가",
          })
        }
      >
        <span>폴더추가</span>
        <Image className={cx("plus-svg")} src={plusImg} alt="plus-img" />
      </button>
    </div>
  );
}
