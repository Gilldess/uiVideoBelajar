import Login from "../components/organisms/Login";
import Navbar from "../components/organisms/Navbar";
import LoginLayout from "../components/templates/LoginLayout";

function LoginPage() {
  return <LoginLayout navbar={<Navbar />} froamlogin={<Login />} />;
}

export default LoginPage;
