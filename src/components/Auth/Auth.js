import { auth, provider } from "../../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "./Auth.css";
import Cookies from "universal-cookie";
import google from "../../img/google.png";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <p>Welcome to Room Chat!</p>
      <img src={google} alt="google logo" />
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
};
