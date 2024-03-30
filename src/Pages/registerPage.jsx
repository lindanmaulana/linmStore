import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="Your details">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
