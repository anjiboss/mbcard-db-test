import { useState } from "react";
import "../css/form.css";

const AddInfo = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const addInfoHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Add Info</h1>
      <div className="form">
        <form autoComplete="off" onSubmit={addInfoHandler}>
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
            <h4>Password</h4>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="form-input">
            <h4>FirstName</h4>
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className="form-input">
            <h4>Last Name</h4>
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default AddInfo;
