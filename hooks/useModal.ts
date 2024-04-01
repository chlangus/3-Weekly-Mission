import { Dispatch, SetStateAction, useState } from "react";
type target =
  | "공유"
  | "이름 변경"
  | "삭제"
  | "폴더추가"
  | "삭제하기"
  | "폴더에 추가"
  | "추가하기"
  | "";

export interface Modal {
  state?: boolean;
  target?: target;
  folderId?: number;
  folderName?: string;
  url?: string;
}

export default function useModal() {
  const [modalState, setModalState] = useState<Modal>({
    state: false,
    target: "",
    folderId: 0,
    folderName: "",
    url: "",
  });

  const handleModalCancel = () =>
    setModalState({
      state: false,
    });

  return { modalState, setModalState, handleModalCancel };
}
