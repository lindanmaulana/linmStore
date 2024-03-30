import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/InputForm";
import ButtonSwitchPage from "../Elements/Button/ButtonSwitchPage";

const FormRegister = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/login";
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-2">
      <InputForm
        type="text"
        name="username"
        placeholder="input your username"
      />
      <InputForm type="email" name="email" placeholder="input your email" />
      <InputForm
        type="password"
        name="password"
        placeholder="input your password"
      />
      <Button> Register Now </Button>
      <div className="flex justify-end">
        <p className="text-xs">Already have an acount?</p>
        <ButtonSwitchPage to="/login" color="text-blue-500" position="text-end">
          Login
        </ButtonSwitchPage>
      </div>
    </form>
  );
};

export default FormRegister;
