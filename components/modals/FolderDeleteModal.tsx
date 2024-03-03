import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  state: { folderName: string };
}

export default function FolderDeleteModal({ state }: Props) {
  return (
    <>
      <h2 className={cx("modal-title", "having-folder-and-link")}>폴더 삭제</h2>
      <h3 className={cx("link-and-folder-name")}>{state["folderName"]}</h3>
      <button className={cx("modal-submit-btn", "modal-delete-btn")}>
        삭제하기
      </button>
    </>
  );
}