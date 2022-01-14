import axios from "axios";
import { useState } from "react";
export default function App() {
  const [state, setState] = useState([]);
  const [error, setError] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const fetchData = async (e) => {
    setIsFetched(true);
    await axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res, "res");
        if (res.data) {
          setIsFetched(false);
          setState(res.data.data);
        } else {
          setIsFetched(false);
          setError("An error occurred-Data doesn't exist");
          setIsErr(true);
        }
      })
      .catch((err) => {
        setIsFetched(false);
        setError("An error occurred-couldn't fetch the data");
        setIsErr(true);
      });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={fetchData}>Click here</button>
      <div>
        {isFetched ? (
          <h1>Loading...</h1>
        ) : isErr ? (
          <h3>{error}</h3>
        ) : (
          state.map((item) => (
            <div
              key={item.id}
            >{`${item.id}- ${item.first_name} ${item.last_name}`}</div>
          ))
        )}
      </div>
    </div>
  );
}
