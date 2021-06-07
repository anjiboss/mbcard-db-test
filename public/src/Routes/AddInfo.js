import { useState } from "react";
import "../css/form.css";
import "../css/addInfo.css";

const AddInfo = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  const addInfoHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Add Info</h1>
      <div className="form" id="add-info-form">
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

          <div className="form-input">
            <h4>Phone Number</h4>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="form-input">
            <h4>Alternative Phone Number</h4>
            <input
              type="text"
              name="alt-phone"
              value={altPhone}
              onChange={(e) => {
                setAltPhone(e.target.value);
              }}
            />
          </div>
          <div className="sns">
            <h4>SNS</h4>
            <div className="form-input">
              <h5>Facebook</h5>
              <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={(e) => {
                  setFacebook(e.target.value);
                }}
              />
            </div>

            <div className="form-input">
              <h5>Instagram</h5>
              <input
                type="text"
                name="instagram"
                value={instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
              />
            </div>
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
