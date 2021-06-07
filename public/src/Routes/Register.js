import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        repassword: repassword,
      }),
    });

    const result = await res.json();
    if (result.success === false) {
      setError("Error Message : " + result.error);
    }
  };

  return (
    <>
      <h1>Register Page</h1>
      <h5>{error}</h5>
      <div className="register">
        <form onSubmit={registerHandler}>
          <div className="form-input">
            <h4>Username</h4>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="form-input">
            <h4>Email</h4>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-input">
            <h4>Password</h4>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="form-input">
            <h4>Re-password</h4>
            <input
              type="password"
              name="re-password"
              value={repassword}
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              style={
                password !== repassword && password !== ""
                  ? { border: "2px solid red" }
                  : { border: "2px solid green" }
              }
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        <div className="have-user">
          <p>Already Have Account?</p>
          <Link to="/user">User Page</Link>
        </div>
      </div>
    </>
  );
};
export default Register;
