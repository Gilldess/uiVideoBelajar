import Navbar from "../components/organisms/Navbar";
import SignUp from "../components/organisms/SignUp";
import SignUpLayout from "../components/templates/SignUpLayout";

const SignUpPage = ()=> {
    return (
        <SignUpLayout navbar={<Navbar />} froamsignup={<SignUp />} />
    )
}

export default SignUpPage;