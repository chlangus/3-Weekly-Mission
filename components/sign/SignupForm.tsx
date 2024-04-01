import { Input } from "@/components/sign/SignInput";
import styles from "@/styles/accountPage.module.css";
import classNames from "classnames/bind";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { checkEmail, postSignUp } from "@/api/api";
import { FormData } from "./SigninForm";

export const EMAIL_REG = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const PASSWD_REG = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

const cx = classNames.bind(styles);
export default function SignUpForm() {
  const { handleSubmit, setError, control, getValues } = useForm<FormData>({
    mode: "onBlur",
  });

  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string }) => {
    const emailCheck = await checkEmail({ email: data.email, setError });
    if (emailCheck) {
      const result = await postSignUp(data);

      localStorage.setItem("accessToken", result.accessToken);
      router.push("/folder");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) router.push("/folder");
  }, [router]);

  return (
    <form
      className={cx("email-passwd-wrapper")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cx("email-passwd")}>
        <label htmlFor="email-input">이메일</label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: EMAIL_REG,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              id="email-input"
              type="email"
              placeholder="이메일을 입력해 주세요."
              {...field} // field 객체에서 제공하는 onChange, onBlur, value를 Input에 전달
              error={fieldState.error} // fieldState에서 error 상태를 가져와서 Input에 전달
            />
          )}
        />
      </div>
      <div className={cx("email-passwd")}>
        <label htmlFor="passwd-input">비밀번호</label>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value: PASSWD_REG,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              id="password-input"
              type="password"
              placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
              {...field} // field 객체에서 제공하는 onChange, onBlur, value를 Input에 전달
              error={fieldState.error} // fieldState에서 error 상태를 가져와서 Input에 전달
            />
          )}
        />
      </div>
      <div className={cx("email-passwd")}>
        <label htmlFor="passwd-check">비밀번호 확인</label>
        <Controller
          control={control}
          name="password-check"
          rules={{
            required: "비밀번호와 일치하는 값을 입력해 주세요.",
            validate: (value) => {
              if (value !== getValues("password"))
                return "비밀번호가 일치하지 않아요";
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              id="password-check"
              type="password"
              placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
              {...field} // field 객체에서 제공하는 onChange, onBlur, value를 Input에 전달
              error={fieldState.error} // fieldState에서 error 상태를 가져와서 Input에 전달
            />
          )}
        />
      </div>

      <button type="submit" className={cx("login", "long")}>
        회원가입
      </button>
    </form>
  );
}
