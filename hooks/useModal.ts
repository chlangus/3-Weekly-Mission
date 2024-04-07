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

export interface ModalData {
  state?: boolean;
  target?: target;
  folderId?: number;
  folderName?: string;
  cardId?: number;
  url?: string;
}

export default function useModal() {
  const [modalState, setModalState] = useState<ModalData>({
    state: false,
    target: "",
    folderId: 0,
    folderName: "",
    cardId: 0,
    url: "",
  });

  const handleModalCancel = () =>
    setModalState({
      state: false,
    });

  return { modalState, setModalState, handleModalCancel };
}
