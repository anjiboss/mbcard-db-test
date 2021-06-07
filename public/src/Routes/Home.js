import { useState } from "react";

const Home = () => {
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  return (
    <>
      <h1>You are home</h1>

      <input
        type="text"
        value={text1}
        onChange={(e) => {
          setText1(e.target.value);
        }}
      />

      <input
        type="text"
        value={text2}
        style={
          text1 === text2
            ? { border: "2px solid green" }
            : { border: "2px solid red" }
        }
        onChange={(e) => {
          setText2(e.target.value);
        }}
      />
    </>
  );
};
export default Home;
