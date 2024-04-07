import { ModalData } from "@/hooks/useModal";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import { useDeleteLink } from "@/hooks/useDeleteLink";

const cx = classNames.bind(styles);
interface Props {
  state: ModalData;
  cancelModal: any;
}
export default function LinkDeleteModal({ state, cancelModal }: Props) {
  const deleteLinkMutate = useDeleteLink();
  const handleClick = () => {
    console.log(state);
    deleteLinkMutate(Number(state.cardId));
    cancelModal();
  };
  return (
    <>
      <h2 className={cx("modal-title", "having-folder-and-link")}>링크 삭제</h2>
      <h3 className={cx("link-and-folder-name")}>{state["url"]}</h3>
      <button
        className={cx("modal-submit-btn", "modal-delete-btn")}
        onClick={handleClick}
      >
        삭제하기
      </button>
    </>
  );
}
