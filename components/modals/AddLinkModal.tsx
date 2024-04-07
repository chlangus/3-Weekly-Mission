import { UserFolder } from "@/api/api";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import { ModalData } from "@/hooks/useModal";
import { Dispatch, SetStateAction, useState } from "react";
import { useAddLink } from "@/hooks/useAddLink";

const cx = classNames.bind(styles);

interface Props {
  state: ModalData;
  data: UserFolder[];
  link: string;
  setModalState: Dispatch<SetStateAction<ModalData>>;
}
export default function AddLinkModal({
  state,
  data: folderList,
  link,
  setModalState,
}: Props) {
  const addLinkMutation = useAddLink();
  const [folderId, setFolderId] = useState(0);
  const handleClick = () => {
    addLinkMutation({ link, folderId });
    setModalState((prev) => ({ ...prev, state: false }));
  };
  return (
    <>
      <h2 className={cx("modal-title", "having-folder-and-link")}>
        폴더에 추가
      </h2>
      <h3 className={cx("link-and-folder-name")}>{state["url"] ?? link}</h3>
      <div className={cx("folder-item-wrapper")}>
        {folderList?.map((folder) => (
          <button
            key={folder?.id}
            onClick={() => {
              setFolderId(folder.id);
            }}
            className={cx(folder.id === folderId && "selected", "modal-btn")}
          >
            <div className={cx("folder-item")}>
              <span className={cx("link-name")}>{folder?.name}</span>
              <span className={cx("link-length")}>
                {folder.link_count}개 링크
              </span>
            </div>
          </button>
        ))}
      </div>
      <button className={cx("modal-submit-btn")} onClick={handleClick}>
        추가하기
      </button>
    </>
  );
}
