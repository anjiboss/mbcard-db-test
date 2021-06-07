import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Count = () => {
  const [counter, setCounter] = useState(5);
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
    if (counter === 0) {
      history.push("/addinfo");
    } // eslint-disable-next-line
  }, [counter]);

  return (
    <h6>
      Register Successfully, Redirecting to Add Infomation in : {counter + " "}
      second(s)
    </h6>
  );
};
export default Count;
