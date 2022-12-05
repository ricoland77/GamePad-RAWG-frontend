import { useState } from "react";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import steam from "../assets/images/steam.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/signup", {
        email: email,
        username: username,
        password: password,
      });
      console.log(response.data);

      if (response.data.token) {
        // console.log(response.data.token);
        handleToken(response.data.token);
        navigate("/");
      }

      if (!email || !password) {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="signup">
        <section className="signup-left">
          <h2>Sign up</h2>
          <form className="form-signup">
            <input
              className="input-signup"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              className="input-signup"
              value={username}
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              className="input-signup"
              value={password}
              type="password"
              placeholder="Create a password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input type="submit" value="Sign up" className="btn-signup" />
          </form>
          <Link to="/user/signin">
            <p className="already">Already have an account? Log in</p>
          </Link>
        </section>

        <section className="signup-right">
          <h2>You can use social accounts to sign up</h2>
          <div className="social-account">
            <img src={facebook} alt="" />
            <span>Continue with Facebook</span>
          </div>
          <div className="social-account-twitter">
            <img src={twitter} alt="" />
            <span>Continue with Twitter</span>
          </div>
          <div className="social-account-steam">
            <img src={steam} alt="" />
            <span>Continue with Steam</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
