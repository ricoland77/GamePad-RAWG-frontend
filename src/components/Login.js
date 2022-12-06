import { useState } from "react";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import steam from "../assets/images/steam.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email: email,
        password: password,
      });
      //   console.log(response.data);

      if (response.data.token) {
        // console.log(response.data.token);
        handleToken(response.data.token);
        navigate("/home");
      }

      if (!email || !password) {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="background-login">
      <div className="signup">
        <section className="signup-left">
          <h2>Login</h2>
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
              value={password}
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input
              type="submit"
              value="Log in"
              className="btn-signup"
              onClick={handleClick}
            />
          </form>
          <Link to="/user/signup">
            <p className="already">Don't have an account? Sign up.</p>
          </Link>
        </section>

        <section className="signup-right">
          <h2>You can use social accounts to log in</h2>
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

export default Login;
