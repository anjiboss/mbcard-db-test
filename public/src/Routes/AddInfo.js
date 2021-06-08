import { useState } from "react";
import "../css/form.css";
import "../css/addInfo.css";

const AddInfo = () => {
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [linkName, setLinkName] = useState("");
  const [url, setURL] = useState("");
  const [quote, setQuote] = useState("");

  const addInfoHandler = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("Please Provide Your Username And You Password");
    } else {
      const res = await fetch(`api/addinfo/${username}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          info: {
            firstName: firstName,
            lastName: lastName,
          },
          sns: {
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            github: github,
          },
          contact: {
            phone: phoneNumber,
            altPhone: altPhone,
          },
          customLink: {
            name: linkName,
            url: url,
          },
          quotes: quote,
        }),
      });

      const result = await res.json();
      console.log(result);
      if (result.success === false) {
        setError(result.error);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setError("Updated Successfully");
      }
    }
  };
  return (
    <>
      <h1>Add Info</h1>
      <div className="form" id="add-info-form">
        <h5 style={{ color: "red" }}>{error}</h5>
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
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="input-container">
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
                value={phoneNumber}
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
          </div>
          <div className="input-container">
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
            <div className="form-input">
              <h5>Twitter</h5>
              <input
                type="text"
                name="twitter"
                value={twitter}
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
              />
            </div>

            <div className="form-input">
              <h5>Github</h5>
              <input
                type="text"
                name="github"
                value={github}
                onChange={(e) => {
                  setGithub(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="input-container">
            <h4>Custom Link</h4>
            <p>add a custom link if you don't see the SNS you wanted</p>
            <div className="form-input">
              <h5>Link Name</h5>
              <input
                type="text"
                name="custom-link"
                value={linkName}
                onChange={(e) => {
                  setLinkName(e.target.value);
                }}
              />
            </div>

            <div className="form-input">
              <h5>URL</h5>
              <input
                type="text"
                name="URL"
                value={url}
                onChange={(e) => {
                  setURL(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-input">
              <h4>Describe You Or Write Your Quote</h4>
              <textarea
                type="text"
                name="quote"
                className="text-area"
                value={quote}
                onChange={(e) => {
                  setQuote(e.target.value);
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
