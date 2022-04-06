import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sing-up-form/sing-up-form.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
