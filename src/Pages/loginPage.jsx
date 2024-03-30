import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
const loginPage = () => {
  return (
    <AuthLayouts title="Login" type="email and password">
      <FormLogin />
    </AuthLayouts>

  );
};

export default loginPage;
