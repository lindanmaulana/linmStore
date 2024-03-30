import { useState } from "react";
import Button from "../Elements/Button/Button";
import ButtonSwitchPage from "../Elements/Button/ButtonSwitchPage";
import InputForm from "../Elements/Input/InputForm";

const FormLogin = () => {
  const [authAcount, setAuthAcount] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (
      event.target.email.value === email &&
      event.target.password.value === password
    ) {
      window.location.href = "/app";
    } else [setAuthAcount("Gagal masuk. Silakan periksa kembali.")];
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2">
      <InputForm type="email" name="email" placeholder="input your email" />
      <InputForm
        type="password"
        name="password"
        placeholder="input your password"
      />
      <Button> Login Now </Button>
      <div className="flex justify-end">
        <p className="text-xs">Dont have an acount</p>
        <ButtonSwitchPage
          to="/register"
          color="text-blue-500"
          position="text-end"
        >
          SignUp
        </ButtonSwitchPage>
      </div>
      {authAcount.length > 0 ? (
        <p className="text-red-500 self-end text-xs">{authAcount}</p>
      ) : (
        ""
      )}
    </form>
  );
};

export default FormLogin;
