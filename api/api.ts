import { AxiosError } from "axios";
import axios from "./axios";

//테스트 하려고 임시로 저장해놨습니다.

export interface FolderData {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  user_id: number;
}
// 폴더 정보
export async function getUserFolder(folderId: number) {
  const response = await axios.get(`/folders/${folderId}`);
  if (typeof response.data === "object" && response.data[0])
    return response.data[0];

  return;
}

export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

// 유저 정보
export async function getUser() {
  const response = await axios.get(`/users`);
  if (typeof response.data === "object" && response.data[0]) {
    return response.data[0];
  }
  return;
}

export interface UserFolder {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  link_count: number;
}
// 유저가 가진 폴더 리스트
export async function getFolderList() {
  const response = await axios.get(`/folders`);
  return response.data;
}

// 폴더 생성
export async function createFolder(name: string) {
  const response = await axios.post("/folders", {
    name,
  });
  return response.data;
}

// 폴더 삭제
export async function deleteFolder(folderId: number) {
  const response = await axios.delete(`/folders/${folderId}`);
  return response.data;
}

// 폴더 이름 변경
export async function updateFolder(folderId?: number, name?: string) {
  const response = await axios.put(`/folders/${folderId}`, {
    name,
  });
  return response.data;
}
// 링크 생성
export async function createLink(url: string, folderId: number) {
  const response = await axios.post("/links", {
    url,
    folderId,
  });
  return response.data;
}

export interface UserFolderLinkData {
  id: number;
  favorite?: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

// 유저가 가진 폴더의 링크리스트
export async function getUserFolderLinkList(folderId: number) {
  const response = await axios.get(`/folders/${folderId}/links`);
  return response.data;
}
export interface UserLinkData {
  id: number;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}
// 유저가 가진 링크 리스트
export async function getLinkList() {
  const response = await axios.get(`/links`);
  return response.data;
}

interface SetError {
  setError: any;
}

interface PostSignData {
  email: string;
  password?: string;
}

type Sign = SetError & PostSignData;

export async function postSignIn({ email, password, setError }: Sign) {
  try {
    const response = await axios.post("/auth/sign-in", {
      email,
      password,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.message);

      if (e.response?.status === 400) {
        setError("email", {
          type: "custom",
          message: "이메일을 확인해 주세요.",
        });
        setError("password", {
          type: "custom",
          message: "비밀번호를 확인해 주세요.",
        });
      }
    }
    return;
  }
}

export async function postSignUp({ email, password }: PostSignData) {
  const response = await axios.post("/auth/sign-up", {
    email,
    password,
  });
  return response.data;
}

export async function checkEmail({ email, setError }: Sign) {
  try {
    const response = await axios.post("/users/check-email", { email });
    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.message);
      if (e.response?.status === 409)
        setError("email", {
          type: "custom",
          message: "이미 사용중인 이메일입니다.",
        });
    }
    return;
  }
}
