import React, { useState } from "react";
import useModal from "../../hooks/useModal";
import styles from "./AddLinkBar.module.css";
import Modal from "../modals/Modal";
import classNames from "classnames/bind";
import { UserFolder } from "@/api/api";

const cx = classNames.bind(styles);

interface Props {
  folderList: UserFolder[];
}

export default function AddLinkBar({ folderList }: Props) {
  const { modalState, setModalState, handleModalCancel } = useModal();
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <div className={cx("form-container")}>
      <Modal
        state={modalState}
        setModalState={setModalState}
        onClick={handleModalCancel}
        folderList={folderList}
      />
      <div className={cx("add-link-form")}>
        <input
          className={cx("add-link-input")}
          placeholder="링크를 추가해 보세요"
          onBlur={handleInput}
        ></input>
        <button
          className={cx("add-btn")}
          onClick={() => {
            setModalState({ state: true, target: "추가하기", url: inputValue });
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}
